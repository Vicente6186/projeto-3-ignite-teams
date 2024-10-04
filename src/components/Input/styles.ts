import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_300,
}))`
   ${({ theme }) => css`
    flex-direction: row;
    padding: 16px;
    border-radius: 8px;
    background-color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
   `}
`

