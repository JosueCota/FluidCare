import { Text, TextInput } from "react-native";


export default Input = ({title, placeholder, callback, label}) => {

    return (   
        <>
            <Text style={styles.Label}>
                {label}:            
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
        display: "inline",
        fontSize: 20,
        padding: 5,
        marginTop: 1,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        borderRadius: 5,
    },
    Label: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 20
    }
}