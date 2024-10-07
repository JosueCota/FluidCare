import { View, Text } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

export default Home = () => {
    const db = useSQLiteContext()
    return (
        <View>
            <Text>This is home </Text>
        </View>
    );
}