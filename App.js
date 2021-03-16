import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import BookCount from './components/BookCount'

class App extends React.Component {
  // Add state in contrusctor method in the class
  // App class is inheriting form React class
  // So we must use super

  // NOTE : //
  // The constructor method does 2 things
  // Setup state or bind methods
  // If we don't call super method, we don't have access to the this keyword
  constructor() {
    super()
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
    }
  }

  render() {
    return (
      // View is a container given to us by React
      // It maps directly to the native view
      <View style={{flex: 1}}>
        <SafeAreaView />
        <View style={{height: 70, borderBottomWidth: 0.5, borderBottomColor: "#E9E9E9", alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 24}}>Book Tracker</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{height: 70, borderTopWidth: 0.5, borderTopColor: "#E9E9E9", flexDirection: "row"}}>
          
          <BookCount />
          
          <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Reading</Text>
            <Text>{this.state.readingCount}</Text>
          </View>
          
          <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Read</Text>
            <Text>{this.state.readCount}</Text>
          </View>
          
        </View>
        <SafeAreaView />
      </View>
    );
  }
}