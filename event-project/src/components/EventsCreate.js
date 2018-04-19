import React, {Component} from 'react';
import {Card,CardItem,Input,Button} from './common';
import {connect} from 'react-redux';
import {eventUpdate,eventCreate} from "../actions";
import {Picker,Text} from 'react-native';


class EventsCreate extends Component{

    onButtonPress(){
        const {eventName,place,kind} = this.props;

        this.props.eventCreate({eventName,place,kind});
    }

    render(){
        return(
          <Card>
              <CardItem>
                  <Input
                  label="eventName"
                  value={this.props.eventName}
                  onChangeText={value =>this.props.eventUpdate({prop:'eventName',value})}
                  />
              </CardItem>

              <CardItem>
                  <Input
                  label = "Place"
                  value={this.props.place}
                  onChangeText={value =>this.props.eventUpdate({prop:'place',value})}
                  />
              </CardItem>

              <CardItem>
                  <Text>Type of Event</Text>
                  <Picker
                      style={{flex:1}}
                  selectedValue={this.props.kind}
                  onValueChange = {value => this.props.eventUpdate({prop:'kind',value})}
                  >
                      <Picker.Item label="Music" value="Music"/>
                      <Picker.Item label="Art" value="Art"/>
                      <Picker.Item label="Food" value="Food"/>
                  </Picker>
              </CardItem>

              <CardItem>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Create
                  </Button>
              </CardItem>
          </Card>
        );
    }
}

const mapStateToProps = (state) =>{
  const {eventName,place,kind} = state.eventForm;

  return {eventName,place,kind};
};

export default connect(mapStateToProps,{
    eventUpdate,eventCreate
}) (EventsCreate);