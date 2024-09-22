import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputForm from "../components/InputForm";


export default Setup = ({setName, setInfo}) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="NameInput" options={{headerShown: false}} >
                {() => <InputForm nextScreen={"DifInput"} placeholder={"Whats Your Name"}/>}    
            </Stack.Screen>
            <Stack.Screen name="DifInput">
                {() => <InputForm placeholder={"Are you a dialysis Patient?"}/>}
            </Stack.Screen>
        </Stack.Navigator>
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