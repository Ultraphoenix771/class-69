
import React from 'react';
import {createAppContainer}from "react-navigation"
import {createBottomNavigator, createBottomTabNavigator}from "react-navigation-tabs"
import TransactionScreen from './screens/TransactionScreen'
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  
}
const TabNavigator = createBottomTabNavigator({
  TransactionScreen:{screen:TransactionScreen},
  SearchScreen:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)
