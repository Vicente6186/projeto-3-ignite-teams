import styled from "styled-components/native";
import {} from '@expo/vector-icons'
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatListProps } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 0 16px;
`

export const GroupsList = styled.FlatList.attrs(()=>({
    contentContainerStyle: {
        flex: 1,
        gap: 12
    }
}))<FlatListProps<string>>``
