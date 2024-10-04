import { css } from "styled-components";
import styled from "styled-components/native";


export type VariantType = 'DEFAULT' | 'SELECTED'

type Props = {
    variant: VariantType
}

export const Container = styled.TouchableOpacity<Props>`
    padding: 8px;
    border: 1px solid transparent;
    ${({variant, theme}) => variant === 'SELECTED' && css`
        border-radius: 4px;
        border-color: ${theme.COLORS.GREEN_700};
    `}
`

export const Name = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`