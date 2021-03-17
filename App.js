import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import BookCount from './components/BookCount'
import CustomActionButton from './components/CustomActionButton'

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
      isAddNewBookVisible: false,
      textInputData: "",
      books: []
    }
  }

  // We use Class component when we want their class to manage its own state
  // In a functional, we cannot setup state on our own
  // Class components allow you to create lifecycle methods like constructor, componentDid, will etc..
  // In functional we don't have access to it but we have Hooks instead in newer versions of React
  // Expo relies on React Native v0.5.7

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true })
  }

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false })
  }

  addBook = (book) => {
    this.setState((state, props) => ({
      books: [...state.books, book],
      totalCount: state.totalCount + 1,
      readingCount: state.readingCount + 1,
      bookData: {...state.bookData, author: 'Naim'}
    }), 
    () => {
      console.log(this.state)
    })
  }

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter(book => book !== selectedBook)
    this.setState(prevState => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }))
  }

  renderItem = (item, index) => (
    <View style={{height: 50, flexDirection: "row"}}>
      <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
        <Text>{item}</Text>
      </View>

      <CustomActionButton style={{width: 100, backgroundColor: "#a5deba"}} onPress={() => this.markAsRead(item, index)}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Mark as Read</Text>
      </CustomActionButton>
      
    </View>
  )



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
          {this.state.isAddNewBookVisible && (
          <View style={{height: 50, flexDirection: "row"}}>
            <TextInput onChangeText={(text) => this.setState({textInputData: text})} style={{flex: 1, backgroundColor: '#ececec', paddingLeft: 5}} placeholder="Enter Book Name" placeholderTextColor='grey' />

            <CustomActionButton onPress={() => this.addBook(this.state.textInputData)} style={{backgroundColor: '#a5deba'}}>
              <Ionicons name="ios-checkmark" color='white' size={40}/>
            </CustomActionButton>
            <CustomActionButton onPress={this.hideAddNewBook} style={{backgroundColor: '#deada5'}}>
              <Ionicons name="ios-close" color='white' size={40}/>
            </CustomActionButton>
            {/* <CustomActionButton>
              <Ionicons name="ios-close" color='white' size={40}/>
            </CustomActionButton> */}
            {/* <TouchableOpacity onPress={() => this.addBook(this.state.textInputData)}>
              <View style={{width: 50, height: 50, backgroundColor: '#a5deba', alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="ios-checkmark" color='white' size={40}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.hideAddNewBook}>
              <View style={{width: 50, height: 50, backgroundColor: '#deada5', alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons name="ios-close" color='white' size={40}/>
              </View>
            </TouchableOpacity> */}
          </View>
          )}

          <FlatList data={this.state.books} keyExtractor={(item, index) => index.toString()} renderItem={({item}, index) => this.renderItem(item, index)} ListEmptyComponent={<View style={{marginTop: 50, alignItems: "center"}}><Text style={{fontWeight: 'bold'}}>Not Reading Any Books</Text></View>}/>
          
          <CustomActionButton position={"right"} onPress={this.showAddNewBook} style={{backgroundColor: "#AAD1E6", borderRadius: 25}}>
            <Text style={{color: 'white', fontSize: 30}}>+</Text>
          </CustomActionButton>

        </View>
        
        <View style={{flex: 1}} />
        <View style={{height: 70, borderTopWidth: 0.5, borderTopColor: "#E9E9E9", flexDirection: "row"}}>
          
          <BookCount title="Book Title" count={this.state.totalCount}/>
          <BookCount title="Reading" count={this.state.readingCount}/>
          <BookCount title="Read" count={this.state.readCount}/>
        
        </View>
        <SafeAreaView />
      </View>
    );
  }
}