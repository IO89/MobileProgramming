import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FlatList, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {eventsFetch} from "../actions";
import ListItem from './ListItem';


class EventsList extends Component {
    componentWillMount() {
        this.createDataSource();
    }

    // Fetch data from firebase
    createDataSource() {
        this.props.eventsFetch();
    }

    renderRow(event) {
        return <ListItem event={event}/>;
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.events}
                    renderItem={this.renderRow}
                    keyExtractor={event => event.uid}
                />
                <Button onPress={Actions.eventsCreate} title="Create Event"/>
            </View>

        );
    }
}

const mapStateToProps = state => {
    const events = _.map(state.events, (val, uid) => {
        return {...val, uid};
    });
    return {events};
};

export default connect(mapStateToProps, {eventsFetch})(EventsList);