import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    // View is a container given to us by React
    // It maps directly to the native view
    <View style={{flex: 1}}>
      <SafeAreaView/>
      <View style={{height: 70, borderBottomWidth: 0.5, borderBottomColor: "#E9E9E9", alignItems: 'center', justifyContent: 'center'}}>
        <Text>Book Tracker</Text>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{height: 70, borderTopWidth: 0.5, borderTopColor: "#E9E9E9", flexDirection: "row"}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Total</Text>
          <Text>0</Text>
        </View>
        <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Reading</Text>
          <Text>0</Text>
        </View>
        <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Read</Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red',
    flexDirection: 'column'
  },
});
