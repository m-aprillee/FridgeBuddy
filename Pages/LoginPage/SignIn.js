import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, Button } from "react-native";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export default function SignUp() {
    return (
      <View style={styles.container}>
        <Text>Already have an account? Sign In Here</Text>
        <Button
        title="Sign In"
        onPress={signInWithEmailAndPassword}> 
        Sign In 
        </Button>
      </View>
    );
  }

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