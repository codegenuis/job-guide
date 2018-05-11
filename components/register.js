import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

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
    const filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const reg = /^-?\d+\.?\d*$/;
    const post = {
        name : this.state.name,
        phoneNumber : this.state.phoneNumber,
        emailAddress: this.state.emailAddress,
        state: this.state.emailAddress,
        lga: this.state.lga,
        currentAddress: this.state.currentAddress,
        training : this.state.training
    }
    if (this.state.name ==  '' || this.state.phoneNumber == '' || this.state.emailAddress == '' || this.state.state == '' || this.state.lga == '' || this.state.currentAddress =='' || this.state.training == ''){
        alert ('Please fill in your Details');
    }
    
    else if (!reg.test(this.state.phoneNumber)){
        alert ('Invalid number');
    }
   else if (!filter.test(this.state.emailAddress)){
        alert ('Please fill in your email');
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
        this.state.name = '';
        }
    }

  render() {
    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dimiss} accessible = {false}>
      <View style={styles.regForm}>
      <Text style = {styles.header}> Registration </Text>
        <TextInput style = {styles.textInput} placeholder= "Name" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({name: text})}
        value= {this.state.name}
        placeholderTextColor = "#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Phone number" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({phoneNumber: text})}
        valuen = {this.state.phoneNumber}
         placeholderTextColor = "#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Email address" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({emailAddress: text})} 
        value = {this.state.emailAddress}
         placeholderTextColor = "#fff"
        />
        <TextInput style = {styles.textInput} placeholder= "State" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({state: text})}
        value = {this.state.state} 
        placeholderTextColor = "#fff"

         />
        <TextInput style = {styles.textInput} placeholder= "Lga" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({lga: text})}
        value= {this.state.lga}
         placeholderTextColor = "#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Current Address" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({currentAddress: text})}
        value = {this.state.currentAddress} />
        <TextInput style = {styles.textInput} placeholder= "Area of training" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({training: text})}
        value = {this.state.training}
         placeholderTextColor = "#fff"
         />
        <TouchableOpacity style={styles.button} onPress = { () => this.submit()}>
        <Text style = {styles.btntext}> Sign Up </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
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
      borderBottomColor: '#199187',
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
