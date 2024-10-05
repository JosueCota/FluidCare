import { TextInput, Text, View } from "react-native";
import Input from "./Input"
import InputButton from "./InputButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { useState } from 'react';

export default InputForm = () => {
    const [selected, setSelected] = useState([])
    
    const data = [
        {key: "1", value:"Monday"},
        {key: "2", value:"Tuesday"},
        {key: "3", value:"Wednesday"},
        {key: "4", value:"Thursday"},
        {key: "5", value:"Friday"},
        {key: "6", value:"Saturday"},
        {key: "7", value:"Sunday"}
    ]
    return (
        <View style={styles.Container}>
            <Input label="Name" placeholder={"Ex: John Doe"} title={"name"} callback={null}/>
            <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                style={styles.Select}
                data={data}
                placeholder="Select Dialysis Days"
                label="Dialysis Days"
                save="value"
                badgeStyles={{backgroundColor:"lightblue"}}
            />
            <Input label={"Time"} placeholder={"Dialysis Time"} title={"Dialysis Time"} callback={null}/>
            <InputButton/>
        </View>
    );

}

const styles = {
    Container: {
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
    },
    Select: {
        backgroundColor: "blue"
    }
}