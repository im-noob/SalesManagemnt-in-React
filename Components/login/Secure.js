import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import TakeOrderFromCustomer from '../salesman/takeOrderFromCustomer';
import ChangePassword from './changePassword';


export default class Secured extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error:null,
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
           (position) => {
             console.log("wokeeey");
             console.log(position);
             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
           },
           (error) => this.setState({ error: error.message }),
           { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
         );
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
