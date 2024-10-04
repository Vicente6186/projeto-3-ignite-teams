import { FlatList, Text } from "react-native";
import { Container, GroupsList } from "./styles";
import { ScreenTitle } from "@components/ScreenTitle";
import { UsersThree } from "phosphor-react-native";
import Header from "@components/Header";
import GroupCard from "@components/GroupCard";
import Button from "@components/Button";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Group from "../../models/Group";
import { useCallback, useState } from "react";
import ListEmpty from "@components/ListEmpty";

export default function IndexGroups() {

    const [groups, setGroups] = useState<string[]>([])
    const navigation = useNavigation();

    function indexGroups() {
        Group.index()
        .then((groups) => setGroups(groups))
        .catch()
    }

    function handleStoreNewGroup() {
        navigation.navigate('StoreGroup')
    }

    useFocusEffect(
        useCallback(() => {
         indexGroups()
        }, [])
      );

    return (
       <Container>
        <Header />
        <ScreenTitle title="Turmas" subtitle="jogue com a sua turma" style={{marginVertical: 32}}/>

        <GroupsList 
            data={groups}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <GroupCard name={item} onPress={() => navigation.navigate('IndexParticipants', {group: item})}/>}
            ListEmptyComponent={<ListEmpty message="Nenhuma turma encontrada"/>}
        />

        <Button title="Criar nova turma" style={{ marginVertical: 32 }} onPress={handleStoreNewGroup}/>
       </Container>
    )
}