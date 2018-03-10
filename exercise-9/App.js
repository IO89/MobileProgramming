import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";
import { MapView, Marker } from "expo";

let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    flex: 0.9,
    width,
    height
  },
  subcontainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    marginRight: 1,
    borderRadius: 1,
    padding: 5,
    fontSize: 25
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAddress: "",
      region: {
        latitude: 60.20069,
        longitude: 24.934302,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0321
      },
      coordinate: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  onRegionChange(region) {
    console.log("onRegionChange", region);
  }

  showAddress = () => {
    const url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      this.state.inputAddress +
      "&key=AIzaSyBw10uHAN3yzvIQbv2lFJPQM0vuylbzhTA";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        let lat = responseJson.results[0].geometry.location.lat;
        let lon = responseJson.results[0].geometry.location.lng;
        this.setState({
          region: {
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0321
          },
          coordinate: {
            latitude: lat,
            longitude: lon
          }
        });
      })
      .catch(error => {
        Alert.alert(JSON.stringify(error));
      });

    return;
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta
          }}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.coordinate.latitude,
              longitude: this.state.coordinate.longitude
            }}
          />
        </MapView>
        <View style={styles.subcontainer}>
          <TextInput
            style={styles.input}
            value={this.state.inputAddress}
            onChangeText={inputAddress => this.setState({ inputAddress })}
          />
          <Button title="Search" onPress={this.showAddress} />
        </View>
      </View>
    );
  }
}
