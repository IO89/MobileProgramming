import React, {Component} from 'react';
import {Text,TouchableWithoutFeedback,View} from "react-native";
import {CardItem} from "./common";
import {Actions} from 'react-native-router-flux';


const styles ={
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
};

class ListItem extends Component{
    onRowPress(){
        Actions.eventsEdit({event: this.props.event });
    }

    render(){
        const {eventName} = this.props.event.item;

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
            <CardItem>
                <Text style={styles.titleStyle}>
                    {eventName}
                </Text>
            </CardItem>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;