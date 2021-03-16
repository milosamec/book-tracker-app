import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import BookCount from './components/BookCount'

export default class App extends React.Component {
  // Add state in contrusctor method in the class
  // App class is inheriting form React class
  // So we must use super

  // NOTE : //
  // The constructor method does 2 things
  // Setup state or bind methods
  // If we don't call super method, we don't have access to the this keyword
  constructor() {
    super();
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

        <View style={{flex: 1}}>
          <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: "#AAD1E6", alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 30}}>+</Text>
          </View>
        </View>

        <View style={{flex: 1}}></View>
        <View style={{height: 70, borderTopWidth: 0.5, borderTopColor: "#E9E9E9", flexDirection: "row"}}>
          
          <BookCount title="Total" count={this.state.totalCount}/>
          <BookCount title="Reading" count={this.state.readingCount}/>
          <BookCount title="Read" count={this.state.readCount}/>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}