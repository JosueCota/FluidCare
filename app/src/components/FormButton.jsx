import { Pressable, Text, StyleSheet } from "react-native";


export default FormButton = ({title, onPress, type}) => {

    return (
        <Pressable onPress={onPress} 
        style={({pressed}) => type!=="input"?
            [styles.SubmitButton, pressed && styles.SubmitPressed]
            :[styles.InputButton, pressed && styles.InputPressed]}
        >
            <Text style={[styles.Text, type==="input" && {color:"black"}]} title={title}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    //Button for submitting forms
    SubmitButton: {
        marginTop: 10,
        marginBottom: 10,
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
    //Buttons that trigger non-form submissions
    InputButton: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor:"white"
    },
    InputPressed: {
        backgroundColor: "darkgrey",
    }
});