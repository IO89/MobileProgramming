import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Expo, { SQLite } from "expo";
import {
  FormLabel,
  FormInput,
  Button,
  List,
  ListItem,
  Header
} from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  listcontainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

const db = SQLite.openDatabase("coursedb.db");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: "", product: "", list: [] };
  }

  componentDidMount() {
    // Create shoppinglist table
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists list (id integer primary key not null, amount text, product text);"
      );
    });
    this.updateList();
  }

  // Save product
  saveItem = () => {
    db.transaction(
      tx => {
        tx.executeSql("insert into list (amount, product) values (?, ?)", [
          this.state.amount,
          this.state.product
        ]);
      },
      null,
      this.updateList
    );
  };

  // Update productlist
  updateList = () => {
    db.transaction(tx => {
      tx.executeSql("select * from list", [], (_, { rows }) =>
        this.setState({ list: rows._array })
      );
    });
  };

  // Delete course
  deleteItem = id => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from list where id = ?;`, [id]);
      },
      null,
      this.updateList
    );
  };

  listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <Header outerContainerStyles={{width: "100%"}}
      centerComponent={{text: "Grocery List", style:{color: "#fff", fontSize: 20}}}          
      backgroundColor= "#65a215"
  />
        <FormLabel>Product</FormLabel>
        <FormInput
          placeholder="Product"
          style={{
            marginTop: 30,
            fontSize: 18,
            width: 200,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={product => this.setState({ product })}
          value={this.state.product}
        />
        <FormLabel>Amount</FormLabel>
        <FormInput
          placeholder="Amount"
          keyboardType="text"
          style={{
            marginTop: 5,
            marginBottom: 5,
            fontSize: 18,
            width: 200,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={amount => this.setState({ amount })}
          value={this.state.amount}
        />
        <Button
          raised
          icon={{ name: "save" }}
          onPress={this.saveItem}
          title="Save"
        />
        <FlatList
          style={{ marginLeft: "5%" }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.listcontainer}>
              <Text style={{ fontSize: 18 }}>
                {item.product}, {item.amount}{" "}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#0000ff" }}
                onPress={() => this.deleteItem(item.id)}
              >
                bought
              </Text>
            </View>
          )}
          data={this.state.list}
          ItemSeparatorComponent={this.listSeparator}
        />
      </View>
    );
  }
}
