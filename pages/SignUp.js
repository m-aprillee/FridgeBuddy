import { auth } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, Button } from "react-native";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
        <Text>New User? Sign Up Here</Text>
        <Button
        title="Sign Up"
        onPress={createUserWithEmailAndPassword}> 
        Sign Up 
        </Button>
      </View>
    );
  }