import React, { Component } from "react";
import { CardItem } from "./common/CardItem";
import { Text } from "react-native";

const styles = {
  titleStyle: {
    fontSize: 18
  }
};

const { titleStyle } = styles;

class ListItem extends Component {
  render() {
    return (
      <CardItem>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardItem>
    );
  }
}
export default ListItem;
