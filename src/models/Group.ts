import AsyncStorage from "@react-native-async-storage/async-storage"
import Participant from "./Participant"
import AppError from "@errors/AppError"

class Group {
    static key = '@groups'
    static async store(name: string) {
        name = name.trim()
        if (!name) throw new AppError('Preencha o nome da turma')
        const groups = await this.index()
        const newGroups = [...groups, name]
        await AsyncStorage.setItem(this.key, JSON.stringify(newGroups))
    }

    static async index() : Promise<string[]> {
        const groups = await AsyncStorage.getItem(this.key)
        const parsedGroups = groups ? JSON.parse(groups) : []
        return parsedGroups
    }

    static async destroy(name: string) {
        const groups = await this.index()
        Participant.destroy({group: name})
        const newGroups = groups.filter((item: string) => item !== name)
        await AsyncStorage.setItem(this.key, JSON.stringify(newGroups))
    }
}

export default Group