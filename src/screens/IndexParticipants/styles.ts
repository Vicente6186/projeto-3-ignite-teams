import styled from "styled-components/native";
import { } from '@expo/vector-icons'
import { Plus, UsersThree } from "phosphor-react-native";
import { css } from "styled-components";
import { FlatListProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParticipantType } from "../../models/Participant";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 0 16px;
`

export const StoreParticipantContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const StoreParticipantIcon = styled(Plus).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_700
}))``

export const FiltersContainer = styled.View`
     margin-top: 32px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FiltersList = styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        gap: 8
    }
})) <FlatListProps<string>>`
`

export const ParticipantsQuantityText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const ParticipantsList = styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        flex: 1,
        gap: 12
    }
})) <FlatListProps<ParticipantType>>``
