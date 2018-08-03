import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import LoginScreen from './Components/login/LoginScreen';




export default class myapp extends Component{
  render(){
    return(
      <View>
        <LoginScreen/>
    
      </View>
    );    
  }
}

