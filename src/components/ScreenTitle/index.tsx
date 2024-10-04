import { ViewProps } from "react-native"
import { Container, SubTitle, Title } from "./styles"

type Props = ViewProps & {
    title: string
    subtitle?: string
}

export function ScreenTitle({title, subtitle = '', ...rest}: Props) {
    return <Container {...rest}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
    </Container>
}