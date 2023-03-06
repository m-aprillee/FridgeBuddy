import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

const state = {
    email: '',
    password: ''
};

const handleEmail = (text) => {
    state.email = text
 }

const  handlePassword = (text) => {
    state.password = text
 }

const verifyInput = (email, password) => {
   if (email == '' && password == '') {
      alert("Email/Password cannot be empty");
      return false;
   } 
   return true;
 }
// TODO
const login = (email, password) => {
    alert('[LOGIN] email: ' + email + ' password: ' + password)
 }
 
/*
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    alert(email, password);
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  */

const Login = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.logoText}>FridgeBuddy</Text>
            <Text style = {styles.title}>Login</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleEmail}/>
            
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handlePassword}/>
            <Button
               title = "New User? Register Here"
               onPress = {
                  () => navigation.navigate('Register')
               }
            />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {/*signInWithEmailAndPassword(auth, state.email, state.password),*/login(state.email, state.password), verifyInput(state.email, state.password) && navigation.navigate('My Fridge')} // TODO
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      );
}

export default Login;

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