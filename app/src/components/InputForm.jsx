import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "./Input"
import FormButton from "./FormButton";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import React, { useState, useEffect } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import { hourFormat12 } from "../util/utils";
import { useNavigation } from "@react-navigation/native";

export default InputForm = () => {
    const [name, setName] = useState("")
    const [selected, setSelected] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [time, setTime] = useState("")
    
    const nav =  useNavigation()

    const handleSubmit = () => {
        //Assuming both are set
        nav.navigate("Home");
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
        <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
            <Input label="Name" placeholder={"Enter Name"} title={"name"} callback={setName} value={name}/>
            <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                placeholder="Select Dialysis Days (Max Four)"
                label="Dialysis Days"
                save="value"
                searchPlaceholder="Search Day"
                search={false}
                closeicon={true}
                boxStyles={{backgroundColor:"white"}}
                badgeStyles={{backgroundColor:"#0009"}}
            />
            {selected.length >4? <Text style={styles.Error}>Max Days Selectable is Four Days*</Text>: null}
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
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    Container: {
        width: "90%",
        
        // justifyContent: "space-around",
        alignContent: "center",
        alignSelf: "center",
    },
    Error : {
        fontFamily:"serif",
        fontSize: 13,
        color: "red"
    }
});