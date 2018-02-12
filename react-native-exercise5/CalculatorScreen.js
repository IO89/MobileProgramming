import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import React from 'react';

export default class CalculatorScreen extends React.Component{
  static navigationOptions = {title:'Calculator',};

  constructor(props) {
    super(props);
    this.state = { value1: 0, value2: 0, result: 0, data: [] }
  };

  buttonAdd = () => {
    const result = parseInt(this.state.value1) + parseInt(this.state.value2);
    const history = this.state.value1 + ' + ' + this.state.value2 + ' = ' + result;
    this.setState(() => {
      return { result: result }
    });
    this.setState({ data: [...this.state.data, { key: history }] });
  }

  buttonSubstract = () => {
    const result = parseInt(this.state.value1) - parseInt(this.state.value2);
    const history = this.state.value1 + ' - ' + this.state.value2 + ' = ' + result;
    this.setState(() => {
      return { result: result }
    });
    this.setState({
      data: [...this.state.data, { key: history }]
    });

  }


  render(){
      const {navigate} =this.props.navigation;
      return (
        <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Result: {this.state.result}</Text>

        <TextInput style={{
          width: 200, borderColor: 'gray',
          borderWidth: 1
        }}
          keyboardType={'numeric'}
          onChangeText={(value1) => this.setState({ value1 })}
        />
        <TextInput style={{
          width: 200, borderColor: 'gray',
          borderWidth: 1
        }}
          keyboardType={'numeric'}
          onChangeText={(value2) => this.setState({ value2 })}
        />
        <Button onPress={this.buttonAdd} title="Add" />
        <Button onPress={this.buttonSubstract} title="Substract" />
        <Button onPress={() => navigate('History', {data: this.state.data})} title="History" />

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