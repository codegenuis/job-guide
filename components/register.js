import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, } from 'react-native';

export default class Register extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        name: '',
        phoneNumber: '',
        emailAddress: '',
        state: '',
        lga: '',
        currentAddress: '',
        training: '',

    }
}
submit= () => {
    const {name, phoneNumber, emailAddress, state, lga, currentAddress, training} = this.state;
    const reg = /^-?\d+\.?\d*$/;
    const filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const post = {
        name : this.state.name,
        phoneNumber : this.state.phoneNumber,
        emailAddress: this.state.emailAddress,
        state: this.state.emailAddress,
        lga: this.state.lga,
        currentAddress = this.state.currentAddress,
        training = this.state.training
    }
    if (name = ''){
        alert ('Please fill in your name');
    }
    
    else if (!reg.test(phoneNumber)){
        alert ('Invalid number');
    }
   else if (!filter.test(emailAddress)){
        alert ('Please fill in your email');
    }
   else if (state = ''){
        alert ('Please fill in your stat');
    }
    else if (lga = ''){
        alert ('Please fill in your name lga');
    }
    else if (currentAddress = ''){
        alert ('Please fill in your name currentaddress');
    }
    else if (training = ''){
        alert ('Please fill in your area of training');
    }

    else{
        fetch('https://emplug-usersapi.herokuapp.com/user',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err) )
        alert ('Details submitted');
        }
    }

  render() {
    return (
      <View style={styles.regForm}>
      <Text style = {styles.header}> Registration </Text>
        <TextInput style = {styles.textInput} placeholder= "Name" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(name)} />
        <TextInput style = {styles.textInput} placeholder= "Phone number" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(phoneNumber)} />
        <TextInput style = {styles.textInput} placeholder= "Email address" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(emailAddress)} />
        <TextInput style = {styles.textInput} placeholder= "State" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(state)} />
        <TextInput style = {styles.textInput} placeholder= "Lga" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(lga)} />
        <TextInput style = {styles.textInput} placeholder= "Current Address" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(currentAddress)} />
        <TextInput style = {styles.textInput} placeholder= "Area of training" underlineColorAndriod = {'transparent'} onChangeText = {name => this.setState(training)} />
        <TouchableOpacity style={styles.button} onPress = {this.submit}>
        <Text style = {styles.btntext}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regForm: {
    alignSelf: 'stretch',
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#',
      borderBottomWidth: 1,
  },
  textInput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
});
