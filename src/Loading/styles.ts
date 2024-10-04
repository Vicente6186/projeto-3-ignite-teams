import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const LoadingIcon = styled.ActivityIndicator.attrs(({theme})=>({
    size: 64
}))``