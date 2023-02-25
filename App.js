import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Login from "./Pages/LoginPage/Login";
import Home from "./Pages/HomePage/Home";

const App = () => {
  return (
    // <Login/>
    <Home/>
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