import { css } from "styled-components";
import styled from "styled-components/native";

export type VariantType = 'PRIMARY' | 'DANGER'
type Props = {
    variant?: VariantType
}

export const Container = styled.TouchableOpacity<Props>`
    flex-direction: row;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
`