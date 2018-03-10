import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Card, Button, CardItem, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class Appsrc extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBdo145E2KQMSC_0TVWI5-lC0z41r2NANM",
      authDomain: "auth-f8234.firebaseapp.com",
      databaseURL: "https://auth-f8234.firebaseio.com",
      projectId: "auth-f8234",
      storageBucket: "auth-f8234.appspot.com",
      messagingSenderId: "961500149942"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={()=>firebase.auth().signOut()}>
          Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardItem>{this.renderContent()}</CardItem>
      </View>
    );
  }
}
export default Appsrc;
