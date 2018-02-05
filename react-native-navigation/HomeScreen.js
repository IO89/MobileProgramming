import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View,Button } from 'react-native';
import React from 'react';

export default class HomeScreen extends React.Component{
  static navigationOptions = {title:'Home',};

  render(){
      const {navigate} =this.props.navigation;
      return (
          <View>
          <Text>Hello there!</Text>
          <Button onPress={()=> navigate('Settings',{user:'Mike'})} title="Settings" />
          </View>
      );
  }
}
