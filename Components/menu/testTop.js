import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class SecondScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        SecondScreen: {
            screen: SecondScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            header: (
                <View style={styles.container}>
                    <View style={styles.topcontainer}>
                        <View style={styles.applogocontainer}>
                            <Text>HEllo 4736</Text>
                        </View>
                    </View>
                </View>
            )
        },
    }
);