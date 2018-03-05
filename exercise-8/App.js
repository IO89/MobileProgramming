import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  TextInput,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyRates: [],
      PickerVaueHolder: [],
      inputValue: "",
      euroValue: ""
    };
  }
  //getting data from api,see JSON file to how to access data
  componentDidMount = () => {
    const url = "https://api.fixer.io/latest";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ moneyRates: responseJson.rates });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  GetSelectedPickerItem = () => {
    const convertValue = (
      this.state.inputValue / this.state.PickerValueHolder
    ).toFixed(2);
    this.setState({
      euroValue: convertValue
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 60 }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJJqjk-pUdhQixRxqJ8OJYXl5pMBso4YzdJyb9y0-tLgV1Pzq"
          }}
        />
        <Text style={{ marginTop: 20 }}>{this.state.euroValue} Euro</Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={inputValue => this.setState({ inputValue })}
          />
          <Picker
            style={{ width: 150, borderWidth: 1 }}
            selectedValue={this.state.PickerValueHolder}
            onValueChange={itemValue =>
              this.setState({ PickerValueHolder: itemValue })
            }
          >
            <Picker.Item label="AUD" value={this.state.moneyRates.AUD} />
            <Picker.Item label="BGN" value={this.state.moneyRates.BGN} />
            <Picker.Item label="BRL" value={this.state.moneyRates.BRL} />
            <Picker.Item label="CAD" value={this.state.moneyRates.CAD} />
            <Picker.Item label="USD" value={this.state.moneyRates.USD} />
          </Picker>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button title="Convert to EUR" onPress={this.GetSelectedPickerItem} />
        </View>
      </View>
    );
  }
}
