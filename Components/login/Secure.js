import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';

<<<<<<< HEAD
import TakeOrderFromCustomer from '../salesman/takeOrderFromCustomer';
import ChangePassword from './changePassword';
=======
import MenuTest from '../menu/Menu.js';
import MapView from 'react-native-maps';
>>>>>>> 72ee9f2bce61d78c954452c3908e45af8943a92a


export default class Secured extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error:null,
        };
    }
    

/*
<ChangePassword/>
<Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />

*/
    render() {
        return (
<<<<<<< HEAD
            <ScrollView style={styles.conatiner}>
                
                
                
                
                <ChangePassword/>

                
            </ScrollView>
=======
            

            

                // <Button
                //             onPress={this.props.onLogoutPress}
                //             title="Logout"
                //      />
            <MenuTest/> 
>>>>>>> 72ee9f2bce61d78c954452c3908e45af8943a92a
        )
    }
}


let styles = StyleSheet.create({
    
    conatiner:{
        paddingTop: 20,
        flexDirection: 'column',
        //justifyContent: 'space-between',
        flex: 1,
    }

}); 
