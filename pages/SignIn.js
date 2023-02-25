import { auth } from "../firebaseConfig.js";
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Already have an account? Sign In Here</Text>
        <Button
        title="Sign In"
        onPress={signInWithEmailAndPassword}> 
        Sign In 
        </Button>
      </View>
    );
  }