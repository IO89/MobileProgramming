import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '', data: [] }
  };

  buttonAdd = () => {
    this.setState({ data: [...this.state.data, { key: this.state.text }], text: '' });
  }

  buttonClear = () => {
    this.setState({
      data: []
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Items list</Text>

        <TextInput style={{
          width: 200, borderColor: 'gray',
          borderWidth: 1
        }}
          onChangeText={(text) => this.setState({ text })}
        />

        <Button onPress={this.buttonAdd} title="Add" />
        <Button onPress={this.buttonClear} title="Clear" />

        <FlatList data={this.state.data}
          renderItem={({ item }) => <Text>{item.key}</Text>} />

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
