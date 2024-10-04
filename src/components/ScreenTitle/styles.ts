import styled, {css} from "styled-components/native";

export const Container = styled.View`
    gap: 4px;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme})=>css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
`
export const SubTitle = styled.Text`
    ${({theme})=>css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`