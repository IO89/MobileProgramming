import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessValue: 0,
      randomResult: parseInt(Math.floor(Math.random() * 100) + 1),//here we need to set random value and parse it!
      counter: 0,
      outputText: "Guess the number between 1 and 100"
    }
  };

  buttonGuess = () => {
    const randomResult = this.state.randomResult;
    const guessValue = this.state.guessValue;
    const counter = this.state.counter;

    if (randomResult > guessValue) {
      const outputText = 'Your guess ' + guessValue + ' is too low';
      this.setState({ outputText: outputText, counter: this.state.counter + 1 });
    }
    if (randomResult < guessValue) {
      const outputText = 'Your guess ' + guessValue + ' is too high';
      this.setState({ outputText: outputText, counter: this.state.counter + 1 });
    }
    if (randomResult == guessValue) {
      const outputText = 'Congrats! ' + guessValue + ' is the right value '
      Alert.alert('You made it in ' + (counter + 1) + ' attempts');
      this.setState({ outputText: outputText });
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.outputText}</Text>
        <TextInput style={{
          width: 200, borderColor: 'gray',
          borderWidth: 1
        }}
          keyboardType={'numeric'}
          onChangeText={(guessValue) => this.setState({ guessValue })}
        />
        <Button onPress={this.buttonGuess} title="Guess" />
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
