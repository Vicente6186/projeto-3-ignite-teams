import { ViewProps } from "react-native"
import { Container, DestroyButton, DestroyButtonIcon, Icon, Name } from "./styles"

type Props = ViewProps & {
    name: string,
    onPressDestroy: () => void
}

export default function ParticipantCard({name, onPressDestroy, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Name>{name}</Name>
            <DestroyButton onPress={onPressDestroy}>
                <DestroyButtonIcon />
            </DestroyButton>
        </Container>
    )
}