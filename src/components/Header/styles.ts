import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

type Props = {
    showBackButton?: boolean
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: ${({showBackButton}) => showBackButton ? 'space-between' : 'center'};
    padding: 8px 16px;
`

export const Brand = styled.Image`
    width: 46px;
    height: 55px;
`

export const BackButtonIcon = styled(CaretLeft).attrs(({theme})=>({
    color: theme.COLORS.WHITE,
    size: 32
}))``