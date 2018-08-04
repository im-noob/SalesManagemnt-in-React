import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Picker,
} from 'react-native';
//import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
export default class Login extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            userType: 'SalesMan',
        };
    
        
      }
    render() {
        let pic = {
            uri: 'https://i.pinimg.com/236x/31/86/d4/3186d43532f63f5b8b9c8f1afa635bd9--heart-wallpaper-wallpaper-iphone.jpg'
          };
          
        return (
            
             
            <View>
                    
                <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={pic}
                >
                    <View style={styles.container}>
                        <Text 
                            style={styles.loginText}>
                            Login
                        </Text>
                        <View style = {styles.inputBox}>
                            <TextInput style={styles.input} placeholder='Username' />
                            <TextInput style={styles.input} placeholder='Password' />
                            <View style={styles.picker}>
                                <Text style={styles.TextLoginAs}>Login As:</Text>
                                <Picker
                                    selectedValue={this.state.userType}
                                    style={styles.pickerStyle}
                                    onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}>
                                    <Picker.Item label="SalesMan" value="SalesMan" />
                                    <Picker.Item label="Admin" value="Admin" />
                                </Picker>
                            </View>
                        </View>
                        
                        <View style={{margin:7}} />
                        <Button 
                            onPress={this.props.onLoginPress}
                            title="          Tap TO Login Me          "
                        />
                        <View style={{margin:3}} />
                        <Text style={styles.forgetPass}>           Forget Password?</Text>
                    </View>
                </ImageBackground>
            </View>
            
            
            )
    }
}


let styles = StyleSheet.create({

    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#ecf0f1',
        padding: 40,
      },
      input: {
        //backgroundImage: 'url(../image/loginBackground.jpg)' ,
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        color:'white',
        backgroundColor:'black',
        fontWeight: '500',
      },
      inputBox:{
        marginTop: 20,
      },
      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
      },
      loginText:{
        fontSize: 40,
        fontWeight: '800',
        color:'white',
      },
      buttonSytle:{
        color: 'black',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
      },
      forgetPass:{
          color:'#3E83F3',
          alignSelf: 'flex-start',
          
      },
      picker:{
        flexDirection: 'row',
        
    },
      pickerStyle:{
        height: 50, 
        width: 20,
        color:'white',
        backgroundColor:'black',
        flex:1,
      },
      TextLoginAs:{
        height: 50, 
        width: 20,
        padding:12,
        fontSize: 20,
        fontWeight: '500',
        color:'white',
        flex:1
      },
      
 
    
  });