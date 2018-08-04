import React, { Component } from 'react';
import {
    AppRegistry,ScrollView,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';



export default class TakeOrderFromCustomer extends Component{

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
                <View style={styles.container}
                >
                    
                    <View style = { styles.HeaderView}>
                        <Text style = { styles.Header}>Create Order</Text>
                    </View>
                    <View style={{margin:7}} />
                    
                    <View style = {styles.MainConteiner}>
                        <View style = {styles.pickerParent}>
                            <Text>Product Name:</Text>
                            <Picker
                                selectedValue={this.state.userType}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}>
                                <Picker.Item label="Select Product Name" value="desc_pname" />
                                <Picker.Item label="INDUSTRIAL PRODUCT" value="industrial_product" />
                                <Picker.Item label="MASALA INCENSE STICKS" value="masala_incense_sticks" />
                                <Picker.Item label="MULTIPURPOSE LIQUID DETERGENT" value="multipurpose_liquid_detergent" />
                                

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Sub Category:</Text>
                            <Picker
                                selectedValue={this.state.userType}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}>
                                <Picker.Item label="Select Sub Type" value="desc_subName" />
                                <Picker.Item label="FLOWER VALLEY" value="flower_valley" />
                                <Picker.Item label="LEMON" value="lemon" />
                                <Picker.Item label="ORANGE" value="orange" />

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Size:</Text>
                            <Picker
                                selectedValue={this.state.userType}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}>
                                <Picker.Item label="Select Size" value="desc_size" />
                                <Picker.Item label="500ML X 24PC" value="500ml_24pc" />
                                <Picker.Item label="1LR X !2PC" value="1lr_12pc" />

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Quantity:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter The Quantity"
                                underlineColorAndroid='transparent'
                                keyboardType = "phone-pad"
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Button
                                    onPress={this.submitForm}
                                    title="Submit"
                            />
                        </View>
                        
                        
                    </View>
                
                </View>
            </KeyboardAvoidingView>
        );
    }
}

let styles = StyleSheet.create({
    
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
    }

}); 