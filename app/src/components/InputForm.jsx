import { Button, TextInput, View } from "react-native";
import Input from "./Input"
import FormButton from "./FormButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import React, { useState, useEffect } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-ionicons";
import { hourFormat12, hourFormat24 } from "../util";

export default InputForm = () => {
    const [selected, setSelected] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [time, setTime] = useState("")

    const handleSubmit = (date) => {

    }

    const handleConfirm = (e, selectedDate) => {
        setDate(selectedDate)
        
        setTime(() => {
            return hourFormat12(`${selectedDate.getHours()}:${selectedDate.getMinutes()}`)}
        );
        setShow(false);
        console.log(hourFormat24(time));
    }

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
                badgeStyles={{backgroundColor:"#0009"}}
            />
            <FormButton onPress={() => setShow(true)} title={time? time:"Set Dialysis Time"} type={"input"}/>

            { show &&
                <DateTimePicker
                value={date}
                mode="time" 
                is24Hour={true}
                onChange={handleConfirm}
                />
            }

            <FormButton title="Submit" onPress={handleSubmit} type={"submit"}/>
        </View>
    );
    
}

const styles = {
    Container: {
        flexDirection: "column",
        alignContent: "center",
        width: "80%",
        margin: "auto",
    },
}