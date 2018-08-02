import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import Component1 from './Components/components1';


export default class myapp extends Component{
  render(){
    return(
      <View>
        <Text> _____________________</Text>
        <Text> _____________________</Text>
        <Text> _____________________</Text>

        <Test msg = 'helloooo' />
        <InputComp />
        <Component1 />
      </View>
    );    
  }
}


class InputComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Enter your name',
      value: 'aarav',
      switchValue: false,
    }
  }

  
  onChangeText(value){
    this.setState({
      textValue: value,
      
    });
  }
  onSubmit(){
    console.log("sumited edititng");
  }
  switchChnaged(value){
    this.setState({
      switchValue:value,
    });
  }
  render(){
    return(
      <View>
        <TextInput
          placeholder = {this.state.placeholder}
          value = { this.state.textValue }
          onChangeText = { (value) => this.onChangeText(value) }
          onSubmitEditing = {this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch 
          value = {this.state.switchValue}
          onValueChange = {(value) => this.switchChnaged(value)}
        />
      </View>
    );
    
  }
}


class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'aarav',
      message: this.props.msg,
      showMessage: true
    };
  }
  static defaultProps = {
    msg:'fuck'
  }

  //functions
  onPress(){
    console.log('presed');
  }
  onPress2(){
    console.log('pured 2');
  }


  render(){

    let name = this.state.showMessage ? this.state.message : 'no Message';
    console.log(name);
    return(
      <View style = {styles.myView}>
        <View>
          <Text style = {{ backgroundColor: 'black' , color: 'white'}}>{this.state.name}</Text>
          <Text style = {{ color: 'red' }} >{name}</Text>
          <Text style = {styles.myText}>{this.state.name}</Text>
          <Text style = {styles.myText} >{name}</Text>
        </View>
        <View style = { styles.container}>
          <TouchableHighlight 
              style = { styles.v1} 
              onPress = {this.onPress}
              underlayColor = 'blue'          
            >       
            <View >
              <Text> View 1 </Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity 
              onPress = {this.onPress2}
              style = { styles.v2}
            >
              <View>
                <Text> View 2 </Text>
              </View>
          </TouchableOpacity>


          <View style = { styles.v3}>
            <Text> View 3 </Text>
          </View>
        </View>

        
      </View>
    );
    
  }
}

let styles = StyleSheet.create({
  myView :{
    backgroundColor: 'yellow',
    //color: 'white'  //view dont have color property
  },
  myText : {
    backgroundColor: 'pink',
     color: 'white'
  },
  container: {
   flexDirection: 'row',
   height: 100
  },
  v1:{
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
  v3:{
    flex: 1,
    backgroundColor: 'purple',
    padding: 10,
  }
});