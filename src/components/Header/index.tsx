import { Text, TouchableOpacity } from "react-native"
import { BackButtonIcon, Brand, Container } from "./styles"
import brand from '@assets/brand/brand.png'

type Props = {
    showBackButton?: boolean,
    onPressBackButton?: () => void
}

export default function Header({showBackButton, onPressBackButton}: Props) {
    return (
        <Container showBackButton={showBackButton}>
            {showBackButton && <TouchableOpacity onPress={onPressBackButton}><BackButtonIcon /></TouchableOpacity>}
            <Brand source={brand} />
        </Container>
    )
}