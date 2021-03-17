import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import BookCount from './components/BookCount'
import CustomActionButton from './components/CustomActionButton'
import colors from './assets/colors'


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
    <View style={styles.listItemContainer}>
      <View style={styles.listItemTitleContainer}>
        <Text>{item}</Text>
      </View>

      <CustomActionButton style={styles.markAsReadButton} onPress={() => this.markAsRead(item, index)}>
        <Text style={styles.markAsReadButtonText}>Mark as Read</Text>
      </CustomActionButton>
      
    </View>
  )



  render() {
    return (
      // View is a container given to us by React
      // It maps directly to the native view
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Book Tracker</Text>
        </View>

        <View style={styles.container}>
          {this.state.isAddNewBookVisible && (
          <View style={styles.textInputContainer}>
            <TextInput onChangeText={(text) => this.setState({textInputData: text})} style={styles.textInput} placeholder="Enter Book Name" placeholderTextColor='grey' />
            <CustomActionButton onPress={() => this.addBook(this.state.textInputData)} style={styles.checkmarkButton}>
              <Ionicons name="ios-checkmark" color='white' size={40}/>
            </CustomActionButton>
            <CustomActionButton onPress={this.hideAddNewBook}>
              <Ionicons name="ios-close" color='white' size={40}/>
            </CustomActionButton>
          </View>
          )}

          <FlatList data={this.state.books} keyExtractor={(item, index) => index.toString()} renderItem={({item}, index) => this.renderItem(item, index)} ListEmptyComponent={<View style={styles.listEmptyComponent}><Text style={styles.listEmptyComponentText}>Not Reading Any Books</Text></View>}/>
          
          <CustomActionButton position={"right"} onPress={this.showAddNewBook} style={styles.addNewBookButton}>
            <Text style={styles.addNewBookButtonText}>+</Text>
          </CustomActionButton>

        </View>
        
        <View style={styles.container} />
        <View style={styles.footer}>
          
          <BookCount title="Book Title" count={this.state.totalCount}/>
          <BookCount title="Reading" count={this.state.readingCount}/>
          <BookCount title="Read" count={this.state.readCount}/>
        
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 70, 
    borderBottomWidth: 0.5, 
    borderBottomColor: colors.borderColor, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 24
  },
  listItemContainer: {
    height: 50,
    flexDirection: 'row'
  },
  listItemTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5
  },
  markAsReadButtonText: {
    fontWeight: 'bold', 
    color: 'white'
  },
  markAsReadButton: {
    width: 100, 
    backgroundColor: colors.bgSuccess,
  },
  addNewBookButton: {
    backgroundColor: colors.bgPrimary, 
    borderRadius: 25
  },
  addNewBookButtonText: {
    color: 'white', 
    fontSize: 30
  },
  checkmarkButton: {
    backgroundColor: colors.bgSuccess
  },
  textInputContainer: {
    backgroundColor: colors.borderColor, 
    paddingLeft: 5,
    flexDirection: "row"
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.bgTextInput,
    paddingLeft: 5
  },
  listEmptyComponent: {
    marginTop: 50, 
    alignItems: "center"
  },
  listEmptyComponentText: {
    fontWeight: 'bold'
  },
  footer: {
    height: 70, 
    borderTopWidth: 0.5, 
    borderTopColor: colors.borderColor, 
    flexDirection: "row"
  },

})