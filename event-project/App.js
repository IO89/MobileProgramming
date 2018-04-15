import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App_src from './src/App_src';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('auth',()=> App_src);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <App_src/>
      </View>
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
