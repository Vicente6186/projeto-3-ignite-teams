import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 32px 24px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 8px;
`

export const Name = styled.Text`
   ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`