import { TextInput } from "react-native";


export default Input = ({title, placeholder, callback}) => {

    return (   
        <TextInput 
            style={styles.Input} 
            onChange={() => callback} 
            title={title}
            placeholder={placeholder}
        />
    );
}

const styles = {
    Input: {

    }
}