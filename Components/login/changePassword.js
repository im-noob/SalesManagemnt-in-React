import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';



export default class ChangePassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userType: 'SalesMan',
        };
    }
    submitForm = () => {

    }
    render(){
        return(
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior="padding"
                windowSoftInputMode="adjustResize"
                keyboardVerticalOffset={Platform.select({ios: 0, android: 120})}
            enabled>
                <View style={styles.container}>
                    <View style = { styles.HeaderView}>
                        <Text style = { styles.Header}>Change Password</Text>
                    </View>
                    
                    <View style={{margin:7}} />
                    <View style = {styles.MainConteiner}>
                        
                        <View style = {styles.pickerParent}>
                            <Text>UserID:</Text>
                            <TextInput
                                editable = {false}
                                style = {styles.input} 
                                placeholder = "USER ID"
                                value = "UID0003424"
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Old Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter Old Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                                autoFocus = {true}
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>New Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter New Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Confirm Password:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Confirm New Password"
                                secureTextEntry = {true}
                                underlineColorAndroid='transparent'
                                
                            />
                        </View>
                        
                        <View style = {styles.pickerParent}>
                            <Button
                                    onPress={this.submitForm}
                                    title="UPDATE"
                            />
                        </View>
                    </View>
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        
        
        
    },
    MainConteiner:{
        padding: 20,
    },
    HeaderView:{
        padding:8,
        
        borderBottomWidth: 3,
        elevation:3,
        
    },
    pickerParent:{
        padding: 10,
    },
    pickerStyle:{
        
        width: '100%',
        //color: '#eaf1f4',
        backgroundColor:'#eaf1f4',
        
        flex:1,
        paddingBottom:10,
    },
    Header:{
        
        fontWeight: '500',
        fontSize:25,
    },
    input:{
       
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        fontWeight: '800',
        backgroundColor:'#eaf1f4',
    }

}); 