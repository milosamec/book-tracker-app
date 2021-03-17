import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CustomActionButton from '../components/CustomActionButton'
import colors from '../assets/colors'
export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomActionButton style={{width: 200, backgroundColor: 'transparent', borderWidth: 0.5, marginBottom: 10, borderColor: 'white'}} title="Log Out" onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
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