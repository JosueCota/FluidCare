import { StyleSheet, View } from "react-native";
import Input from "./Input"
import FormButton from "./FormButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import React, { useState, useEffect } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import { hourFormat12, hourFormat24 } from "../util";

export default InputForm = ({setName, name, setInfo, info}) => {
    const [selected, setSelected] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [time, setTime] = useState("")
    
    useEffect(() => {
        console.log(hourFormat24(time));
    }, [time])
    const handleSubmit = (date) => {
        
    }

    const handleConfirm = (e, selectedDate) => {
        setDate(selectedDate)
        
        setTime(() => {
            return hourFormat12(`${selectedDate.getHours()}:${selectedDate.getMinutes()}`)}
        );
        setShow(false);
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
            <Input label="Name" placeholder={"Enter Name"} title={"name"} callback={null}/>
            <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                placeholder="Select Dialysis Days"
                label="Dialysis Days"
                save="value"
                badgeStyles={{backgroundColor:"#0009"}}
            />
            <FormButton onPress={() => setShow(true)} title={time? `Set to ${time}`:"Set Dialysis Time"} type={"input"}/>

            { show &&
                <DateTimePicker
                value={date}
                mode="time" 
                is24Hour={true}
                onChange={handleConfirm}
                required
                />
            }

            <FormButton title="Submit" onPress={handleSubmit} type={"submit"}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    Container: {
        width: "90%",
        justifyContent: "space-around",
        alignContent: "center",
        alignSelf: "center",
    },
});