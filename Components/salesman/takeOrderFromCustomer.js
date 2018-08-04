import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,View,Button,TextInput
} from 'react-native';


export default class TakeOrderFromCustomer{
    render(){
        return(
            <ScrollView>
                <View>
                    <TextInput></TextInput>
                </View>
                <View>
                    <TextInput></TextInput>
                </View>
                <View>
                    <TextInput></TextInput>
                </View>
                <View>
                    <TextInput></TextInput>
                </View>
            </ScrollView>
        );
    }
}