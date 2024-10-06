import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";


export default FormButton = ({title, onPress, type}) => {
    const nav = useNavigation();
    return (
        <Pressable onPress={onPress} 
        style={({pressed}) => type!=="input"?
            [styles.SubmitButton, pressed && styles.SubmitPressed]
            :[styles.InputButton, pressed && styles.InputPressed]}
        >
            <Text style={styles.Text} title={title}>{title}</Text>
        </Pressable>
    );
}

const styles = {
    //Submit button for submitting forms
    SubmitButton: {
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        width: "90%",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#64ace4",
        justifyContent: "center",
        alignContent: "center",
    },
    SubmitPressed: {
        backgroundColor: "lightblue",
    },
    Text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    //Input button for buttons that trigger non-form submissions
    InputButton: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "grey",
    },
    InputPressed: {
        backgroundColor: "darkgrey",
    }
}