import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
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
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    <Text> {this.state.latitude} </Text>
                    <Text> {this.state.longitude} </Text>
                    <Text> {this.state.error} </Text>
                </Text>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <Text 
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
            

            

                <Button
                            onPress={this.props.onLogoutPress}
                            title="Logout"
                     />
            </ScrollView>
        )
    }
}