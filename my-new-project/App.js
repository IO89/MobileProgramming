import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';

const DATABASEAPI = 'https://events-app-54f37.firebaseio.com/';

export default class App extends React.Component {
  render() {
    return (
      <Header headerText={'Events'} />
    );
  }
}

