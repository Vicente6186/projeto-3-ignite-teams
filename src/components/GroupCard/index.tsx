import { TouchableOpacityProps } from "react-native"
import { Container, Name } from "./styles"

type Props = TouchableOpacityProps & {
    name: string
}

export default function GroupCard({name, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Name>{name}</Name>
        </Container>
    )
}