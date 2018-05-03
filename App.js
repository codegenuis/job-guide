import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Register from './components/register';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style = {styles.container}>
      <Register />
      </View>
      </ScrollView>
      
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
