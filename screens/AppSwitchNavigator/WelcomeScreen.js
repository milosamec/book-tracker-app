import React from 'react'
import {View, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import colors from '../../assets/colors'
import CustomActionButton from '../../components/CustomActionButton'

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: colors.bgMain, paddingTop: 150}}>
                <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
                    <Ionicons name="ios-bookmarks" size={150} color={colors.logoColor} />
                    <Text style={{fontSize: 50, fontWeight: '100', color: 'white'}}>Book Tracker</Text>
                </View>
                <View style={{flex: 1, alignItems: "center"}}>
                    <CustomActionButton style={{width: 200, backgroundColor: 'transparent', borderWidth: 0.5, marginBottom: 10, borderColor: 'white'}} title="Log in" onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={{fontWeight: '200', color: 'white'}}>Log In</Text>
                    </CustomActionButton>
                </View>
            </View>
        )
    }
}