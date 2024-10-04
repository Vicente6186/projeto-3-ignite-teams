import { TextInputProps } from "react-native";
import { Container } from "./styles";


export default function Input(props: TextInputProps){
    return (
        <Container {...props}/>
    )
}