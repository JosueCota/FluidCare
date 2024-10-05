import { View } from "react-native";
import Input from "./Input"
import InputButton from "./InputButton";


export default InputForm = () => {
    return (
        <View style={styles.Container}>
            <Input placeholder={"Name"} title={"name"} callback={null}/>
            <Input placeholder={"Dialysis Days? (EX: MWF)"} title={"Dialysis Days"} callback={null}/>
            <Input placeholder={"Dialysis Time"} title={"Dialysis Time"} callback={null}/>
            <InputButton/>
        </View>
    );

}

const styles = {
    Container: {
        width: "80%",
        textAlign: "center"
    }
}