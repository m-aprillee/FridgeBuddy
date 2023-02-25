import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.logoText}>FridgeBuddy</Text>
            <Text style = {styles.title}>Login</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   logoText: {
      textAlign: 'center',
      color: 'blue',
      padding: 30,
      fontSize: 20,
      fontWeight: 'bold'
   },
   input: {
      margin: 15,
      height: 40,
      width: 250,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign: 'left',
      alignSelf: 'center'
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width: 100,
      alignSelf: 'center'
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   },
   title: {
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
   }
})