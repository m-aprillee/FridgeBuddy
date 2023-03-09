import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class NotificationCenterPreview extends React.Component {
    state = {
        items: [
            {
                id: 123,
                name: 'Apple',
                amt: 3,
                expiry: 2,
            },
        ]
    }
    render() {
        return(
            <View style={styles.container}>
                <Text styles={styles.subTitle}>Notification Center</Text>
                {
                this.state.items.map((item, index) => (
                    <TouchableOpacity style={styles.item}
                        key = {item.id}
                        
                        onPress = {() => this.alertItemExpiry(item)}>
                        <View style = {styles.text}>
                            <Text style={styles.textName}>{item.name} </Text>
                            <Text style={styles.textAmt}>{item.amt} units </Text>
                            <Text style={styles.textExpiry}>{item.expiry} days</Text>
                        </View>
                    </TouchableOpacity>
                ))
                }
            </View>
        )
    };
}

export default NotificationCenterPreview

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 20,
        backgroundColor: 'pink',
        alignItems: 'center',
        width: 300,
        height: 150,
        alignSelf: 'center',
     },
     subTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
     },
     item: {
        backgroundColor: 'white',
        width: 280,
        height: 40,
        margin: 3,
        padding: 5,
       },
       text: {
          fontWeight: 'bold',
          flexDirection: 'row',
          alignSelf: 'center',
       },
       textName: {
        alignSelf: 'flex-start',
       },
       textAmt: {
        alignSelf: 'center',
       },
       textExpiry: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        fontWeight: 'bold',
       }
})