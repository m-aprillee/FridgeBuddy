import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const Footer = () => {
        return(
            <View style={styles.container}>
                <View style={styles.negativeSpace}></View>
                <View style={styles.footer}>
                    <Text>footer</Text>
                </View>
            </View>
        )

}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 20
    },
    negativeSpace: {
        flex: 1,
        backgroundColor: 'red'
    },
    footer: {
        backgroundColor: 'lightblue',
        flex: 2,
    }
})