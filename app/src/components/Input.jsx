import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-ionicons";

export default Input = ({title, placeholder, callback, label, value}) => {

    return (   
        <View style={styles.Container}>
            <Text style={styles.Label}>{label}:
            </Text>
            <TextInput 
            style={styles.Input} 
            onChange={() => callback} 
            title={title}
            placeholder={placeholder}
            value={value}
            
        /> 
        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        marginLeft: 10,
        fontSize: 20,
        padding: 0,
        width: "80%",
        borderRadius: 5,
    },
    Label: {
        fontSize: 20,
    }, 
    Container: {
        flexDirection: "row",
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        alignSelf:"center",
        padding:5,
    }
});