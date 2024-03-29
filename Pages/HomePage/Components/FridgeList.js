import React, { Component, useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'
// import { database } from "../../firebaseConfig";
import { ref, push } from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';


import Swipeable from 'react-native-gesture-handler/Swipeable';
import { async } from '@firebase/util';
import { FlatList } from 'react-native-gesture-handler';

const RenderRight = (progress, dragX) => {
   const scale = dragX.interpolate({
      inputRange: [-50, 0.5],
      outputRange: [1, 0.1]
   })
   const Style = {
      transform : [
         {
            scale
         }
      ]
   }
   return(
       <View style={{width: 80, backgroundColor: 'red', alignItems: 'center'}}>
           <Animated.Text style={[Style, {color: '#fff', fontWeight: "400"}]}>Delete</Animated.Text>
       </View>
   )

}


   
class FridgeList extends Component {
   
   state = {
      names: [
         {
            id: 1,
            name: 'Apple',
            amt: 3,
            expiry: 2,
         }
         // {
         //    id: 2,
         //    name: 'Wheat Bread',
         //    amt: 1,
         //    expiry: 21,
         // },
         // {
         //    id: 3,
         //    name: 'Bell Pepper',
         //    amt: 6,
         //    expiry: 7,
         // },
         // {
         //    id: 4,
         //    name: 'Cucumber',
         //    amt: 3,
         //    expiry: 7,
         // }
      ]
   }


   alertItemExpiry = (item) => {
      alert(item.expiry)
   }
   render() {
      const deleteItem = () => {
         alert('Item will be deleted')
      }


      return (
         <View style={styles.container}>
            {/* <FlatList>
               data={users}
            </FlatList> */}
            <Text>Sort By</Text>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity style={styles.item}
                     key = {item.id}
                     
                     onPress = {() => this.alertItemExpiry(item)}>
                     <Swipeable overshootRight={false} onSwipeableRightOpen={deleteItem} renderRightActions={RenderRight}>
                        <Text style = {styles.text}>
                     
                           <Text style={styles.textName}>{item.name} </Text>
                           <Text style={styles.textAmt}>{item.amt} units </Text>
                           <Text style={styles.textExpiry}>{item.expiry} days</Text>
                     
                        </Text>
                     </Swipeable>
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
    alignSelf: 'flex-start',
   },
   textAmt: {
    alignSelf: 'center',
   },
   textExpiry: {
    alignSelf: 'flex-end',
   }
})