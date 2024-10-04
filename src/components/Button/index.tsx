import { TouchableOpacityProps } from "react-native";
import { Container, Title, VariantType } from "./styles";

type Props = TouchableOpacityProps &  {
    title: string,
    variant?: VariantType
}

export default function Button({title, variant = 'PRIMARY', ...rest}: Props) {
    return (
        <Container variant={variant} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}