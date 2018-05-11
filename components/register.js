import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Picker } from 'react-native';
import {Select, Option} from "react-native-chooser";
import { connect } from 'react-redux';
import { createUser } from '../actions/postActions';
import PropTypes from 'prop-types';

class Register extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        name: '',
        phoneNumber: '',
        emailAddress: '',
        state: '',
        lga: '',
        currentAddress: '',
        training: 'choose a training',

    }
}
onSelect(value, label) {
    this.setState({training : value});
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
    if (this.state.name == '' || this.state.phoneNumber == '' || this.state.emailAddress == '' || this.state.state == '' || this.state.currentAddress == '' || this.state.training == '' ){
        alert ('Please fill in your Details');
    }
    else if (!reg.test(this.state.phoneNumber)){
        alert ('Invalid number');
    }
    else if (!filter.test(this.state.emailAddress)){
        alert ('Please fill in your email');
    }
     else{
         this.props.createUser(post);
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
        placeholderTextColor="#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Phone number" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({phoneNumber: text})}
        value = {this.state.phoneNumber}
        placeholderTextColor="#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Email address" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({emailAddress: text})} 
        value = {this.state.emailAddress}
        placeholderTextColor="#fff"
        />
        <TextInput style = {styles.textInput} placeholder= "State" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({state: text})}
        value = {this.state.state}
        placeholderTextColor="#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Lga" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({lga: text})}
        value= {this.state.lga}
        placeholderTextColor="#fff"
         />
        <TextInput style = {styles.textInput} placeholder= "Current Address" underlineColorAndriod = {'transparent'} 
        onChangeText = {text => this.setState({currentAddress: text})}
        value = {this.state.currentAddress} 
        placeholderTextColor="#fff"
        />
        <Select
        onSelect = {this.onSelect.bind(this)}
        defaultText  = {this.state.training}
        style = {{borderWidth : 1, borderColor : "green"}}
        textStyle = {{color: '#fff'}}
        backdropStyle  = {{backgroundColor : "#d3d5d6"}}
        optionListStyle = {{backgroundColor : "#F5FCFF"}}
        >
      <Option value = 'Plumbing'>Plumbing</Option>
      <Option value = "Carpentering">Carpentering</Option>
      <Option value = "Tailoring">Tailoring</Option>
      <Option value = "Welding">Welding</Option>

    </Select>
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
      marginBottom: 10,
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

Register.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect (null, { createUser })(Register);
