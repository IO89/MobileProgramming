import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions
} from "react-native";
import { MapView, Marker } from "expo";
//shows map on a full screen
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
    marginRight: 5,
    borderRadius: 10,
    padding: 5,
    fontSize: 20
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 60.20069,
        longitude: 24.934302,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0321
      },
      markers: []
    };
  }

  showReustarauntsNearby = async () => {
    try {
      const responseAddress = await fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          this.state.inputAddress +
          "&key=AIzaSyC-8hEW_ejToeLmzopulC0YP7PDv0-5ypI"
      );
      const responseAddressJson = await responseAddress.json();
      let lat = responseAddressJson.results[0].geometry.location.lat;
      let lon = responseAddressJson.results[0].geometry.location.lng;
      this.setState({
        region: {
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0321
        }
      });
      const reustarauntNearby = await fetch(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          lat +
          "," +
          lon +
          "&radius=500&type=restaurant&key=AIzaSyC-8hEW_ejToeLmzopulC0YP7PDv0-5ypI"
      );
      const reustarauntNearbyJson = await reustarauntNearby.json();
      this.setState({
        markers: reustarauntNearbyJson.results
      });
    } catch (error) {
      console.error(error);
    }
  };

  onRegionChange(region) {
    console.log("onRegionChange", region);
  }

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
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker["place_id"]}
              coordinate={{
                latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng
              }}
              title={marker.name}
              description={marker.vicinity}
            />
          ))}
        </MapView>
        <View style={styles.subcontainer}>
        <TextInput
          style={styles.input}
          value={this.state.inputAddress}
          onChangeText={inputAddress => this.setState({ inputAddress })}
        />
        <Button title="Search" onPress={this.showReustarauntsNearby} />
      </View>
      </View>
    );
  }
}

