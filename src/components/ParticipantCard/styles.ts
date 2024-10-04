import { User, X } from "phosphor-react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 16px;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 8px;
`

export const Icon = styled(User).attrs(({theme})=>({
    size: 24,
    color: theme.COLORS.WHITE,
    weight: 'fill'
}))``

export const Name = styled.Text`
   ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const DestroyButton = styled.TouchableOpacity`
    margin-left: auto;
`

export const DestroyButtonIcon = styled(X).attrs(({theme})=>({
    size: 24,
    color: theme.COLORS.RED_DARK,
}))``