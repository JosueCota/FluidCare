import Input from "./Input"
import StackButton from "./StackButton";


export default InputForm = ({nextScreen, placeholder, title, callback}) => {
    return (
        <>
            <Input placeholder={placeholder} title={title} callback={callback}/>
            <StackButton nextScreen={nextScreen}/>
        </>
    );
}