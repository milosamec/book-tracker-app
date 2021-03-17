import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SettingScreen from './screens/SettingScreen'
import {Ionicons} from '@expo/vector-icons'
import CustomDrawerComponent from './screens/DrawerNavigator/CustomDrawerComponent';
import colors from './assets/colors';
/**
 * 
 App Switch Navigator
 - Welcome Screen
  - Sign Up Screen
- Home Screen
 */

const App = () => <AppContainer />

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: { 
    screen: LoginScreen,
    navigationOptions: {}
    }
  }, {
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.bgMain
      }
    }
  })

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Ionicons name="ios-home" size={24}/>
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      title: "Settings",
      drawerIcon: () => <Ionicons name="ios-settings" size={24}/>
    }
  }
}, {
  contentComponent: CustomDrawerComponent
})

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator,
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App;
