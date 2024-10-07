import InputForm from "../components/InputForm";
import { StyleSheet, View } from "react-native";


export default Setup = ({setName, name, setInfo, info}) => {
    return (
        <View style={styles.InputContainer}>
            <InputForm />    
        </View>
    );
}

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        height: "100%"
    }
})