import { TouchableOpacityProps } from "react-native";
import { Container, Name, VariantType } from "./styles";

type Props = TouchableOpacityProps &  {
    name: string,
    variant?: VariantType
}

export default function Filter({name, variant='DEFAULT', ...rest}: Props) {
    return (
        <Container variant={variant} {...rest}>
           <Name>{name}</Name>
        </Container>
    )
}