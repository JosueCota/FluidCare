import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";


export default InputButton = () => {
    const nav = useNavigation();
    return (
        <Pressable style={({pressed}) => [styles.Button, pressed && styles.Pressed]}>
            <Text style={styles.Text} title="Input">Input</Text>
        </Pressable>
    );
}

const styles = {
    Button: {
        width: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignContent: "center",
        margin: 10,
    },
    Pressed: {
        backgroundColor: "blue",
    },
    Text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",

    }
}