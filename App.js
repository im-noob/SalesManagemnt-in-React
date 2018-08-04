import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';

<<<<<<< HEAD
=======
import MenuTest from "./Components/menu/Menu.js";

>>>>>>> 72ee9f2bce61d78c954452c3908e45af8943a92a


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
        
      
       
<<<<<<< HEAD

  }
}
=======
  }
}



>>>>>>> 72ee9f2bce61d78c954452c3908e45af8943a92a
