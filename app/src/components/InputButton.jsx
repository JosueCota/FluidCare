import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";


export default InputButton = () => {
    const nav = useNavigation();
    return (
        <Pressable style={({pressed}) => [styles.Button, pressed && styles.Pressed]}>
            <Text title="Input" onPress={() => null}>Input</Text>
        </Pressable>
    );
}

const styles = {
    Button: {
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignContent: "center",
        margin: 10,
    },
    Pressed: {
        backgroundColor: "blue"
    }
}