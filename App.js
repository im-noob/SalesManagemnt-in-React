import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';




import Login from './Components/login/Login';
import Secured from './Components/login/Secure';

export default class myapp extends Component{
  state = {
    isLoggedIn: true
  }

  render(){

    
       
    if (this.state.isLoggedIn) 
      return <Secured 
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
        
      
       
  }
}