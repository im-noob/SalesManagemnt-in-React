import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
 
import TakeOrderFromCustomer from '../salesman/takeOrderFromCustomer';
import ChangePassword from './changePassword';


export default class Secured extends Component {


/*
<ChangePassword/>
<MenuTest/> 
<Button
                    onPress={this.props.onLogoutPress}
                    title="Logout"
                />

*/
    render() {

        return (

            <ScrollView style={styles.conatiner}>
                
                
                
                <ChangePassword/> 

                
            </ScrollView>
            

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
