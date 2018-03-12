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
import { MapView, Marker, Location, Permissions } from "expo";

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
      location: null,
      mapRegion: null,
      mapCoordinate: {
        latitude: 0,
        longitude: 0
      }
    };
  }
  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert("No permission to access location");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        mapCoordinate: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
      });
    }
  };

  render() {

    return( 
      <View style={styles.container}>
      <MapView style={styles.map}
           region={this.state.mapRegion}
         >
           <MapView.Marker
             coordinate={this.state.mapCoordinate}
             description = "Your location"
           />
         </MapView>
     </View>
    )
   
  }
}
