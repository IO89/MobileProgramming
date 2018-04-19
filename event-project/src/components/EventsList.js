import React,{Component} from 'react';
import {View, Text,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';


class EventsList extends Component{
    render(){
        return(
            <View>
                <Text>A</Text>
                <Text>B</Text>
                <Text>Reallly long</Text>
                <Text>Even more longer than previous</Text>
                <Text>short</Text>
                <Text>AYYYY</Text>
                <Button onPress={Actions.eventsCreate} title="Create Event" />

            </View>
        );
    }
}

export default EventsList;