import styled from "styled-components/native";
import {} from '@expo/vector-icons'
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 0 16px;
`

export const Icon = styled(UsersThree).attrs(({theme})=>({
    size: 56,
    color: theme.COLORS.GREEN_700
}))`
    align-self: center;
    margin-top: 100px;
`