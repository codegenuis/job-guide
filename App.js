import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Register from './components/register';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
      <ScrollView>
      <View style = {styles.container}>
      <Register />
      </View>
      </ScrollView>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
  },
});
