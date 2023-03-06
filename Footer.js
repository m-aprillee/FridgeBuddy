import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/HomePage/Home';
import ShoppingList from './Pages/ShoppingListPage/ShoppingList';
import Profile from './Pages/ProfilePage/Profile';

const footer = createBottomTabNavigator();

const Footer = () => {
    return (
      <footer.Navigator>
        <footer.Screen name="Home" component={Home} />
        <footer.Screen name="Shopping List" component={ShoppingList} />
        <footer.Screen name="Profile" component={Profile} />
      </footer.Navigator>
    );
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