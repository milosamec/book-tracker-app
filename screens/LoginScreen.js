import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import colors from '../assets/colors'
import CustomActionButton from '../components/CustomActionButton'
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: "center",}}>
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <TextInput style={styles.textInput} placeholder="abc@example.com" placeholderTextColor={colors.bgTextInputDark} keyboardType="email-address"></TextInput>
                    <TextInput style={styles.textInput} placeholder="enter password" placeholderTextColor={colors.bgTextInputDark} secureTextEntry></TextInput>
                </View>
                <View style={{alignItems: 'center'}}>
                    <CustomActionButton style={[styles.loginButtons, {borderColor: colors.bgPrimary}]}>
                        <Text style={{color: 'white'}}>Log In</Text>
                    </CustomActionButton>
                    <CustomActionButton style={[styles.loginButtons, {borderColor: colors.bgError}]}>
                        <Text style={{color: 'white'}}>Sign Up</Text>
                    </CustomActionButton>
                </View>
                <View style={{flex: 1}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgMain
    },
    textInput: {
        height: 50,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        marginHorizontal: 40,
        marginBottom: 10,
        color: colors.txtWhite,
        paddingHorizontal: 10
    },
    loginButtons: {
        borderWidth: 0.5,
        backgroundColor: 'transparent',
        marginTop: 10,
        width: 200,
    },
    signInText: {
        color: 'white',
        fontSize: 50, 
        fontWeight: '200',
        paddingTop: 80
    }
})