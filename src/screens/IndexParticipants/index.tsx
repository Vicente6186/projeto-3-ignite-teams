import { Alert, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { Container, FiltersContainer, FiltersList, ParticipantsList, ParticipantsQuantityText, StoreParticipantContainer, StoreParticipantIcon } from "./styles";
import { ScreenTitle } from "@components/ScreenTitle";
import { UsersThree } from "phosphor-react-native";
import Header from "@components/Header";
import GroupCard from "@components/GroupCard";
import Button from "@components/Button";
import Input from "@components/Input";
import ParticipantCard from "@components/ParticipantCard";
import Filter from "@components/Filter";
import { useEffect, useState } from "react";
import ListEmpty from "@components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import Participant, { ParticipantType } from "../../models/Participant";
import Group from "../../models/Group";
import AppError from "@errors/AppError";
import { set } from "mongoose";

type RouteParams = {
    group: string
}

export default function IndexParticipants() {

    const filters = ['Turma A', 'Turma B', 'Turma C']
    const [participants, setParticipants] = useState<ParticipantType[]>([])
    const [name, setName] = useState('')
    const [team, setTeam] = useState('')
    const navigation = useNavigation();
    const {params} = useRoute()
    const {group} = params as RouteParams

    function handleBack() {
        navigation.navigate('IndexGroups')
    }

    function indexParticipants() {
        Participant.index({team, group}).then((participants) => setParticipants(participants)).catch()
    }

    function handleStoreParticipant() {
        Participant.store({ name, team, group: group }).then(() => {
            indexParticipants()
            setName('')
        }).catch(error => {
            if(error instanceof AppError) Alert.alert('Um erro ocorreu', error.message)
        })
    }

    function handleDestroyParticipant({ name, team, group }: ParticipantType) {
        Participant.destroy({ name, team, group }).then(indexParticipants).catch()
    }

    function handleDestroyGroup() {
        Alert.alert('Remover turma', `Tem certeza que deseja remover a turma ${group}?`, [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => Group.destroy(group).then(() => navigation.navigate('IndexGroups')).catch() }
        ])
    }

    useEffect(() => {
        indexParticipants()
    }, [team])

    return (
        <Container>
            <Header showBackButton onPressBackButton={handleBack}/>
            <ScreenTitle title={group} subtitle="adicione a galera e separe os times" style={{ marginVertical: 32 }} />

            <StoreParticipantContainer>
                <Input placeholder="Nome do participante" value={name} onChangeText={setName}/>
               <TouchableOpacity onPress={handleStoreParticipant}><StoreParticipantIcon /></TouchableOpacity>
            </StoreParticipantContainer>

            <FiltersContainer>
                <FiltersList 
                    data={filters}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    renderItem={({item}) => <Filter variant={team === item ? 'SELECTED' : 'DEFAULT'} name={item} onPress={() => setTeam(item)}/>} />
                    <ParticipantsQuantityText>{participants.length}</ParticipantsQuantityText>
            </FiltersContainer>

            <ParticipantsList 
                data={participants}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => <ParticipantCard name={item.name} onPressDestroy={()=>handleDestroyParticipant(item)}/>}
                ListEmptyComponent={<ListEmpty message="Nenhum participante encontrado"/>} />

            <Button title="Remover turma" variant="DANGER" style={{ marginVertical: 32 }} onPress={handleDestroyGroup}/>
        </Container>
    )
}