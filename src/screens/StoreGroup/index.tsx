import { FlatList, Text, TextInput } from "react-native";
import { Container, Icon } from "./styles";
import { ScreenTitle } from "@components/ScreenTitle";
import { UsersThree } from "phosphor-react-native";
import Header from "@components/Header";
import GroupCard from "@components/GroupCard";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import Group from "../../models/Group";
import { useState } from "react";

export default function StoreGroup() {

    const [name, setName] = useState('')
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack()
    }

    function handleStoreNewGroup() {
         Group.store(name).then(() => navigation.navigate('IndexParticipants', { group: name })).catch()
    }

    return (
       <Container>
        <Header showBackButton onPressBackButton={handleBack}/>
        <Icon />
        <ScreenTitle title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" style={{ marginTop: 24, marginBottom: 32 }}/>

        <Input style={{ marginBottom: 20 }}  placeholder="Nome da turma" value={name} onChangeText={setName}/>

        <Button title="Criar nova turma" onPress={handleStoreNewGroup} />
       </Container>
    )
}
