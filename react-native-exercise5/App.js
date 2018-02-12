import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';

const MyApp= StackNavigator({
  Calculator:{screen:CalculatorScreen},
  History:{screen:HistoryScreen}
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
