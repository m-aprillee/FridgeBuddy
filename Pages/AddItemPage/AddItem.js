import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { database } from "../../firebaseConfig";
import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import { ref, push } from 'firebase/database';



const AddItem = ({navigation}) => {

   const [addData, setAddData] = useState('')
   const [addQuantity, setAddQuantity] = useState('')
   const [addCategory, setAddCategory] = useState('')
   
   const addField = () => {
   
      push(ref(database, 'loggedItems/'), {
         name: addData,
         quantity: addQuantity,
         category: addCategory
      });
   }

    return(
        <View style={styles.container}>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(addName) => setAddData(addName)}
               value={addData}
               />

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Quantity"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(addQuantityData) => setAddQuantity(addQuantityData)}
               value={addQuantity}
               />

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Storage Location"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(addCategoryData) => setAddCategory(addCategoryData)}
               value={addCategory}
               />

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
                     addField
                  }
                  />
                  <Button
                  color="#89CFF0"
                  title = "Done"
                  onPress = {
                     () => navigation.navigate('Home2')
                  }
                  />
               </View>
        </View>
    )
}

// export default function AddItem() {
//    return (
//       <View style={styles.container}>
//          <AddItemPage/>
//       </View>
//    )
// }

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