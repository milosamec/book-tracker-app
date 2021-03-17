import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CustomActionButton from '../components/CustomActionButton'
import colors from '../assets/colors'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class SettingScreen extends Component {

    signOut = async () => {
        try {
            await firebase.auth().signOut()

            this.props.navigation.navigate('WelcomeScreen')
        } catch (err) {
            alert('Unable to sign out')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CustomActionButton style={{width: 200, backgroundColor: 'transparent', borderWidth: 0.5, marginBottom: 10, borderColor: 'white'}} title="Log Out" onPress={this.signOut}>
                        <Text style={{fontWeight: '200', color: 'white'}}>Log Out</Text>
                </CustomActionButton>
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