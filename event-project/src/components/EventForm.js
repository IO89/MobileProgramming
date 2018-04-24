import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native'
import {CardItem, Input} from "./common";
import {connect} from 'react-redux';
import {eventUpdate} from '../actions';

class EventForm extends Component {
    render() {
        return (
            <View>
                <CardItem>
                    <Input
                        label="eventName"
                        value={this.props.eventName}
                        onChangeText={value => this.props.eventUpdate({prop: 'eventName', value})}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        label="Place"
                        value={this.props.place}
                        onChangeText={value => this.props.eventUpdate({prop: 'place', value})}
                    />
                </CardItem>

                <CardItem>
                    <Text>Type of Event</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.kind}
                        onValueChange={value => this.props.eventUpdate({prop: 'kind', value})}
                    >
                        <Picker.Item label="Music" value="Music"/>
                        <Picker.Item label="Art" value="Art"/>
                        <Picker.Item label="Food" value="Food"/>
                    </Picker>
                </CardItem>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {eventName,place,kind} = state.eventForm;

    return {eventName,place,kind};
};


export default connect(mapStateToProps,{eventUpdate})(EventForm);