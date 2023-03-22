import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import FridgeList2 from "./Components/FridgeList2.js"
import NotificationCenterPreview from './Components/NotificationCenterPreview.js'


const Home2 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <FridgeList2/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = { () => navigation.navigate('Add Item')
                    }>
                    <Text style = {styles.buttonText}> + Add Item </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = { 
                        () => navigation.navigate('Edit List')
                    }>
                    <Text style = {styles.buttonText}> Edit </Text>
                </TouchableOpacity>
            </View>
            <NotificationCenterPreview/>
            </View>
        )
}

export default Home2


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