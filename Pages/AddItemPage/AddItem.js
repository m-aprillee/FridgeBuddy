import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { FC  } from 'react'

const state = {
   name: '',
   quantity: '',
   category: ''
};

const handleName = (text) => {
   state.name = text
}

const  handleQuantity = (text) => {
   state.quantity = text
}

const  handleCategory = (text) => {
   state.category = text
}



const AddItem = ({navigation}) => {
    return(
        <View style={styles.container}>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleName}/>

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Quantity"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleQuantity}/>

               {/* add category dropdown */}
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Category"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {handleCategory}/>

               <View style={styles.buttonContainer}>
                  <Button
                  color="#ff5c5c"
                  title = "Cancel"
                  onPress = {
                     () => navigation.navigate('Home')
                  }
                  />
                  <Button
                  color="#50C878"
                  title = "Save"
                  onPress = {
                     () => navigation.navigate('Home')
                  }
                  />
                  {/* <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     //add to items 
               </TouchableOpacity> */}
               </View>
        </View>
    )
}

export default AddItem

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
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
       backgroundColor: 'lightblue',
       padding: 10,
       margin: 15,
       height: 40,
       width: 100,
       alignSelf: 'center',
    },
    buttonText:{
       color: 'black',
       textAlign: 'center',
    },
    title: {
       paddingTop: 30,
       paddingBottom: 10,
       textAlign: 'center',
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 25,
       backgroundColor: 'lightblue'

    }
 })