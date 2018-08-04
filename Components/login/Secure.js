import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

import MenuTest from '../menu/Menu.js';
import MapView from 'react-native-maps';


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

    render() {
        return (
            

            

                // <Button
                //             onPress={this.props.onLogoutPress}
                //             title="Logout"
                //      />
            <MenuTest/> 
        )
    }
}