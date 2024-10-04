import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import * as SQLite from "expo-sqlite"

import Home from './src/screens/Home';
import Tracking from './src/screens/Tracking';
import Profile from './src/screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Setup from './src/screens/Setup';



export default function App() {
  const Tab = createBottomTabNavigator();
  
  const [name, setName] = useState("");
  const [setupDone, setSetupDone] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const db = SQLite.openDatabaseSync("fluidDB.db")

  useEffect(() => {
    setIsLoading(false)
    console.log(name)
  }, [name])

  useEffect(() => {
      db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, diaDays TEXT NOT NULL, diaTime TEXT NOT NULL);
        `)
        .then(() => setUser())
        .catch((error) => {
          console.log(error)
        })
    }, [])

  async function setUser() {
    row = await db.getFirstAsync('SELECT * FROM user')
    setName(row.name)
  }

  if (isLoading){
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#64ace4',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 500
          },
          tabBarStyle: {
            backgroundColor: "white"
          },
          headerTitleAlign: "center",
          headerTitle: name? name: "FluidCare",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#64ace4"
          }
        })}
      >
        {
          !name ? 
          <Tab.Screen name="Setup" component={Setup}
          options={{
            tabBarStyle: {
              display: "none"
            }
          }}
          />:
        <>
          <Tab.Screen name="Home" 
          component={Home}
          // children={() => <Home name={name} />}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name='home' size={24} color={color}></Icon>
            )
          }}
          />
          <Tab.Screen name="Tracking" component={Tracking}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="trending-up" size={35} color={color}></Icon>
            )
          }}/>
          <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name='person' size={24} color={color}></Icon>
            )
          }}/>
        </>
      }
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
