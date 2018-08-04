import React ,{Component} from 'react';
import { Text,View , StyleSheet,Button,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';


export default class Header extends Component{

    constructor(props){
        super(prop)
        this.state.myState
    }

    
    render(){
        
        state = {
            myState: 'Welcome'
            
        }
 updateState =(val) => {
                        this.setState({ MyState: val                                         
                                     })
                    }

        const styles=StyleSheet.create({
                                            headerCSS:{
                                                flex: 1, 
                                                flexDirection: 'row',
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
                                               
                                            }



                                        });

                                        
        return(

                <View style={styles.headerCSS}>
                    <View style={styles.headerName}>
                        <Text style={styles.tabName}>name:{this.state.myState}</Text>
                    </View>                   
                </View>

        )
    }
}