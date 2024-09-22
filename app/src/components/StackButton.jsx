import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";


export default StackButton = ({nextScreen}) => {
    const nav = useNavigation();
    return (
        <Button title="Input" onPress={() => nextScreen? nav.navigate(nextScreen): null}/>
    );
}