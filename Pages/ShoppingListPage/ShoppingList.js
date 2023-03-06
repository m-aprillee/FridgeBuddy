import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'

const ShoppingList = ({navigation}) => {
    return(
        <View style={styles.container}>

        </View>
    )
}

export default ShoppingList;


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