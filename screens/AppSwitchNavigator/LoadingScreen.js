import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import colors from '../../assets/colors'

export default class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                // Navigate user to home screen after login
                this.props.navigation.navigate('HomeScreen', {user})
            } else {
                // Navigate user to log in screen
                this.props.navigation.navigate('LoginStackNavigator');
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.logoColor}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bgMain
    }
})
