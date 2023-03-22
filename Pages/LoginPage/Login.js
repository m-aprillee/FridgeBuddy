import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";


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
   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
   if (email == '' && password == '') {
      alert("Email/Password cannot be empty");
      return false;
   } else if (reg.test(email) === false) {
      alert("Must be a valid email.")
      return false;
   }
   return true;
 }
// TODO
const login = (email, password) => {
   //  alert('[LOGIN] email: ' + email + ' password: ' + password)
 }

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
                  () => {
                     login(state.email, state.password); 
                     verifyInput(state.email, state.password);
                     signInWithEmailAndPassword(auth, state.email, state.password)
                     .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                      })
                      .catch((error) => {
                        alert(error.message);
                      });
                     onAuthStateChanged(auth, (user) => {
                        if (user) {
                          // User is signed in, see docs for a list of available properties
                          // https://firebase.google.com/docs/reference/js/firebase.User
                          const uid = user.uid;
                          navigation.navigate('FridgeBuddy');
                          // ...
                        } else {
                          // User is signed out
                          // ...
                        }
                      });
                      } // TODO
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


//  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });