import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import FridgeList from "./Components/FridgeList.js"
import NotificationCenterPreview from './Components/NotificationCenterPreview.js'
import Footer from './Components/Footer.js'

class Home extends React.Component {
    addItem = () => {
        alert("Adding an item")
    }
    editList = () => {
        alert("Editing list")
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>MyFridge</Text>
                <FridgeList/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = { () => this.addItem()}>
                        <Text style = {styles.buttonText}> + Add Item </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = { () => this.editList()}>
                        <Text style = {styles.buttonText}> Edit </Text>
                    </TouchableOpacity>
                </View>
                <NotificationCenterPreview/>
                <Footer/>
            </View>
        )
    };
}

export default Home


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