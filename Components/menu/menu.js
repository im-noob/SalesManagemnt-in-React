import React ,{Component} from 'react';
import { Text,View , StyleSheet,Button,TouchableHighlight,TouchableOpacity,TextInput,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Header } from 'react-native-elements'
import Header from './Header.js';
import HomeTab from '../Tabs/HomeTab.js';

export default class MenuTest extends Component {

 constructor(props){
   super(props);
   this.state = {
    myText:'Home',
    homeTab:true,
    sellerTab:false,
    productTab:false,
    settingTab:false,
   };
 }

 
  menuButton =(value)=>{
          //alert("Hello"),
          update:{
            this.setState.myText="Home"
          }
         
   }

   menuButtonHome = (value) =>{
     this.setState({
      myText: value,
     });
     console.log(value + " buttton pressed");
   }
   homeTab = ()=>{
     
   }
   

  render() {

    checkFunction = ()=>{
                          alert("In check");
                          if(this.state.myText == "Home")
                          {
                            return(
                            <View style={{backgroundColor:'red'}}>
                            <Text>This</Text>
                            </View>);
                          }
                          else if(this.state.myText == "seller")
                          {
                            return(
                            <View style={{backgroundColor:'blue'}}>
                            <Text>This</Text>
                            </View>);
                          }
                      }

    const containerMain = StyleSheet.create({
                  screenMain:{
                                // flexDirection:'row',
                                // backgroundColor:'rgb(241, 244, 171)',
                                flex:1,
                                // height:'100%',
                                // width:'100%',
                              
                              },
                   footer:{                            
                  //             position: 'absolute',
                  //             flex:0.1,
                  //             left: 0,
                  //             right: 0,
                  //             bottom: -10,
                              backgroundColor:'rgb(208, 229, 226)',
                             flexDirection:'row',
                              height:60,
                              justifyContent:'space-around',
                             // alignItems:'center',
                            },
                    header:{                            
                              //position: 'absolute',
                             // flex:0.1,
                              left: 0,
                              right: 0,
                              top: 10,
                              backgroundColor:'rgb(208, 229, 226)',
                              flexDirection:'row',
                              height:60,
                              alignItems:'center',
                              elevation:3,
                              paddingHorizontal: 15,
                              justifyContent:'space-between',
                            },
                  menuView:{
                              padding:2,
                              alignItems:'center',

                            } ,                       
                activeButton:{
                                  borderTopColor: 'blue',
                              },
                button: {
                                alignItems: 'center',
                                backgroundColor: 'rgb(208, 229, 226)',
                                padding: 30
                              },
                              btnClickContain: {
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                alignSelf: 'stretch',
                                backgroundColor: '#009D6E',
                                borderRadius: 5,
                                padding: 5,
                                marginTop: 5,
                                marginBottom: 5,
                              },
                              btnContainer: {
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                alignSelf: 'stretch',
                                borderRadius: 10,
                              },
                              btnIcon: {
                                height: 25,
                                width: 25,
                              },
                              btnText: {
                                fontSize: 18,
                                color: '#FAFAFA',
                                marginLeft: 10,
                                marginTop: 2,
                              },


                              headerCSS:{
                              //  flex: 1, 
                               // flexDirection: 'row',
                                position: 'relative',
                                bottom:0,
                                right:0,
                                left:0,
                                height:80,
                                width:'100%',
                                backgroundColor:'blue' ,
                                justifyContent :'space-around'
                                    },


                            headerName:{
                                flex:3,
                                justifyContent: 'center',
                                alignItems:'center',
                               start:0
                            },
                          
                            tabName:{
                                 color:'rgb(255,255,255)',
                                justifyContent: 'center',
                                alignItems:'center',
                                fontWeight:"900",
                                fontSize:20,                                              
                               
                            },
                            boadyCSS:{
                              // flexDirection: 'row',
                               flex:1,
                              backgroundColor:"green",
                            },
                            tabTitle:{
                              fontSize:11,
                              color:'rgb(0,0,0)',
                            },
                            tabIteam:{
                              alignItems:'center',
                              justifyContent:'center'
                            }

                    // flexDirection: 'row',
                    // backgroundColor:'red',
                    // borderWidth : 1,
                    // borderColor : 'blue',
                    // marginBottom: 2,
                    // position: 'absolute',<Header
        //    statusBarProps={{ barStyle: 'light-content' }}
        //    leftComponent={{ icon: 'menu', color: '#fff' }}
        //    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        //    rightComponent={{ icon: 'home', color: '#fff' }}
        //  />
        //             // bottom:0,
                    // width:500,
                      
     });


      
    return (
      <View style={containerMain.screenMain}>
        
        
        <View style={containerMain.headerCSS}>
          <View style={containerMain.headerName}>
            <Text style={containerMain.tabName}>User:{ this.state.myText } {this.menuButton.update}</Text>
          </View>
        </View>


        <View style={containerMain.boadyCSS}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>


        <View style={containerMain.footer}>
        
        <TouchableOpacity
          style={containerMain.tabIteam}
          onPress={ () => this.menuButtonHome('home')}
          >
          <Icon name="home" size={30} color="black" />
          <Text style={containerMain.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={containerMain.tabIteam}
          onPress={() => this.menuButtonHome('seller')}
          >
          <Icon name="users" size={30} color="black" />
          <Text style={containerMain.tabTitle}>Seller</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={containerMain.tabIteam}
          onPress={() => this.menuButtonHome('Product')}
          >
          <Icon name="shopping-cart" size={30} color="black" />
          <Text style={containerMain.tabTitle}>Product</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={containerMain.tabIteam}
          onPress={this.menuButton}
          >
          <Icon name="gear" size={30} color="black" />
          <Text style={containerMain.tabTitle}>Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}