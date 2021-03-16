import React from 'react';
import { View, Text } from 'react-native'

export default class BookCtn extends React.Component {
    render() {
        return (
            <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20}}>Total</Text>
                <Text>{}</Text>
            </View>
        );
    }
}