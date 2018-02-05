import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default class SettingsScreen extends React.Component{
    static navigationOptions = {title:'Settings',};
    render(){
        const {params}=this.props.navigation.state;
        return(
            <View>
                <Text>Welcome to navigation {params.user}</Text>
            </View>
        );
    }
}