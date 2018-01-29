import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {text:'',value:0}
  };

  buttonAdd =() =>{
    this.setState({})
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{width:200,borderColor:'gray',
        borderWidth:1}}
        onChangeText={()=> this.setState({text})}
        value={this.state.text}
        />
          <TextInput style={{width:200,borderColor:'gray',
        borderWidth:1}}
        onChangeText={(text)=> this.setState({text})}
        value={this.state.text}
        />
        <Button onPress={this.buttonAdd} title="Add" />
        <Button onPress={this.buttonPressed} title="Substract" />
        
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
