import { Text, TextInput } from "react-native";


export default Input = ({title, placeholder, callback, label}) => {

    return (   
        <>
            <Text>
                {label}
            </Text>
            
            <TextInput 
            style={styles.Input} 
            onChange={() => callback} 
            title={title}
            placeholder={placeholder}
            />  
        </>
    );
}

const styles = {
    Input: {
        fontSize: 20,
        padding: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5
    }
}