import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import  'expo';

const MyApp= StackNavigator({
  Home:{screen:HomeScreen},
  Settings:{screen:SettingsScreen}
});

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
