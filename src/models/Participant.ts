import AsyncStorage from "@react-native-async-storage/async-storage"
import AppError from "../errors/AppError"

export type ParticipantType = {
    name: string
    team: string
    group: string
}

class Participant {
    static key = '@participants'

    static async store({ name, team, group }: ParticipantType) {
        name = name.trim()
        console.log('name', name)
        const participants = await this.index()
        if(!name || !team || !group) throw new AppError('Preencha todos os campos');
        if (participants.some(item => item.name === name && item.team === team && item.group === group))
            throw new AppError('Esse participante já existe');
        const newParticipants = [...participants, { name, team, group }]
        await AsyncStorage.setItem(this.key, JSON.stringify(newParticipants))
    }


    static async index(filters?: Partial<ParticipantType>): Promise<ParticipantType[]> {
        const participants = await AsyncStorage.getItem(this.key)
        let parsedParticipants: ParticipantType[] = participants ? JSON.parse(participants) : []

        if (filters) parsedParticipants = parsedParticipants.filter((item: ParticipantType) => (
            Object.keys(filters).every(key => filters[key as keyof ParticipantType] === item[key as keyof ParticipantType])
        ));

        return parsedParticipants
    }

    static async destroy(filters: Partial<ParticipantType>) {
        let participants = await this.index()
        if (filters) participants = participants.filter((item: ParticipantType) => (
            !Object.keys(filters).every(key => filters[key as keyof ParticipantType] === item[key as keyof ParticipantType])
        ));
        await AsyncStorage.setItem(this.key, JSON.stringify(participants))
    }
}

export default Participant
