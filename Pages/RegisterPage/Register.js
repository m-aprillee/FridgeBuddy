import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";


//TEMP STUFF
const state = {
  email: '',
  password: '',
  reenter: ''
};

const handleEmail = (text) => {
  state.email = text
}

const handlePassword = (text) => {
  state.password = text
}

const handleReEnterPassword = (text) => {
  state.reenter = text
}

const verifyInput = (email, password, reenter) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (email == '' || password == '' || reenter == '') {
    alert("All fields are required");
    return false;
  } else if (reg.test(email) === false) {
    alert("Must be a valid email.")
    return false;
  } else if (password !== reenter) {
    alert("Passwords do not match");
    return false;
  }
  return true;
}

const register = (email, password, reenter) => {
  // alert('[REGISTER] email: ' + email + ' password: ' + password + ' reenter: ' + reenter);
}

const Register = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style = {styles.logoText}>FridgeBuddy</Text>
            <Text style = {styles.title}>Register</Text>
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
               onChangeText = {handlePassword}
            />
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Re-enter Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleReEnterPassword}
            />
            <Button
               title = "Already have an account? Login here."
               onPress = {() => navigation.navigate('Login')}
            />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    register(state.email, state.password, state.reenter);
                    verifyInput(state.email, state.password, state.reenter);
                    createUserWithEmailAndPassword(auth, state.email, state.password)
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
                  }
              }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
    );
  }

  export default Register;

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