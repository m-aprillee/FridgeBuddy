import React from "react";
import 'expo-dev-menu';
import { StyleSheet, View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import Home from "./Pages/HomePage/Home";
import Home2 from "./Pages/HomePage/Home2"
import AddItem from "./Pages/AddItemPage/AddItem";
import EditList from "./Pages/EditListPage/EditList";
import Footer from "./Footer";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Login/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="FridgeBuddy"
          component={Footer} 
        />
        <Stack.Screen
          name="Add Item"
          component={AddItem}
        />
        <Stack.Screen
          name="Edit List"
          component={EditList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create ({
  myView: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  myTitle: {
     marginTop: 50,
     textAlign: 'center',
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 20
  }
})