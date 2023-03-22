import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, TouchableHighlight } from 'react-native'
import FridgeList from "../HomePage/Components/FridgeList.js"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ref, push, onValue } from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { database, auth } from "../../firebaseConfig"
import { async } from '@firebase/util';
import { FlatList } from 'react-native-gesture-handler';
import React, { Component, useEffect, useState } from 'react'
//delete this page(?)

// const RenderRight = (progress, dragX) => {
//     return(
//         <View style={styles.swipecontainer}>
//             <Text>Delete</Text>
//         </View>
//     )

// }


const EditList = ({navigation}) => {
   console.log("here")
    const [users, setUsers] = useState([])
    const todoRef = ref(database, 'loggedItems/')

    onValue(todoRef, (snapshot) => {
        const itemsdata = snapshot.val()
        console.log(itemsdata)
        for (key in snapshot.val()) {
         console.log(key)
        }
        
    })
    
    return(
        <View style={styles.container}>
        <FlatList>
           data={users}
        </FlatList>
        </View>
        /* <Swipeable renderRightActions={RenderRight}>
            <View style={styles.container}>
                <FridgeList/>
            </View>
        </Swipeable> */

        
    )
}

export default EditList

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    swipecontainer: {
        paddingTop: 23,
        backgroundColor: 'red'
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