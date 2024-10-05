import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputForm from "../components/InputForm";
import { View } from "react-native";


export default Setup = ({setName, setInfo}) => {
    return (
        <View>
            <InputForm/>    
        </View>
    );
}

const styles = {
    InputContainer: {
        
    },
    InputText: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 30,
        borderRadius: 20,
        backgroundColor: "darkgrey"
        
    }
}