import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import colors from '../assets/colors'
import CustomActionButton from '../components/CustomActionButton'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    onSignIn = () => {

    }
    
    onSignUp = async () => {
        if(this.state.email && this.state.password) {
            try {
                const response = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            } catch (err) {
                if(err.code == 'auth/email-already-in-use') {
                    alert('User already exists. Try logging in')
                } else {
                    alert('Please enter email and password')
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: "center",}}>
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <TextInput style={styles.textInput} placeholder="abc@example.com" placeholderTextColor={colors.bgTextInputDark} keyboardType="email-address" onChangeText={email => this.setState({email})}></TextInput>
                    <TextInput style={styles.textInput} placeholder="enter password" placeholderTextColor={colors.bgTextInputDark} secureTextEntry onChangeText={password => this.setState({password})}></TextInput>
                </View>
                <View style={{alignItems: 'center'}}>
                    <CustomActionButton onPress={this.onSignIn} style={[styles.loginButtons, {borderColor: colors.bgPrimary}]}>
                        <Text style={{color: 'white'}}>Log In</Text>
                    </CustomActionButton>
                    <CustomActionButton onPress={this.onSignUp} style={[styles.loginButtons, {borderColor: colors.bgError}]}>
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