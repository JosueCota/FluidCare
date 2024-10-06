import InputForm from "../components/InputForm";
import { View } from "react-native";


export default Setup = ({setName, setInfo}) => {
    return (
        <View style={styles.InputContainer}>
            <InputForm/>    
        </View>
    );
}

const styles = {
    InputContainer: {
        flex: 1,
        // marginTop: 20,
    }
}