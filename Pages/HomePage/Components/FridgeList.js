import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class FridgeList extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Banana',
            amt: 3,
            expiry: 7,
         },
         {
            id: 1,
            name: 'Apple',
            amt: 3,
            expiry: 2,
         },
         {
            id: 2,
            name: 'Wheat Bread',
            amt: 1,
            expiry: 21,
         },
         {
            id: 3,
            name: 'Bell Pepper',
            amt: 6,
            expiry: 7,
         },
         {
            id: 4,
            name: 'Cucumber',
            amt: 3,
            expiry: 7,
         }
      ]
   }
   alertItemExpiry = (item) => {
      alert(item.expiry)
   }
   render() {
      return (
         <View style={styles.container}>
            <Text>Sort By</Text>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity style={styles.item}
                     key = {item.id}
                     
                     onPress = {() => this.alertItemExpiry(item)}>
                     <Text style = {styles.text}>
                        <Text style={styles.textName}>{item.name} </Text>
                        <Text style={styles.textAmt}>{item.amt} units </Text>
                        <Text style={styles.textExpiry}>{item.expiry} days</Text>
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default FridgeList

const styles = StyleSheet.create ({
   container: {
      padding: 15,
      marginTop: 20,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      width: 300,
      alignSelf: 'center',
   },
   item: {
    backgroundColor: 'white',
    width: 280,
    height: 40,
    margin: 3,
    padding: 5
   },
   text: {
      fontWeight: 'bold',
      
   },
   textName: {
    alignSelf: 'left',
   },
   textAmt: {
    alignSelf: 'center',
   },
   textExpiry: {
    alignSelf: 'right',
   }
})