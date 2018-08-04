import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
<<<<<<< HEAD


import Login from './Components/login/Login';
import Secured from './Components/login/Secure';


export default class myapp extends Component{
  state = {
    isLoggedIn: false
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
=======
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

>>>>>>> 59e788452ab80480037f3ff0d913f34613e4358a
