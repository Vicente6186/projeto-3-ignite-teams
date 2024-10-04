import { Container, Text } from "./styles";

type Props = {
    message: string
}

export default function ListEmpty({message}: Props) {
    return (
        <Container>
            <Text>{message}</Text>
        </Container>
    )
}