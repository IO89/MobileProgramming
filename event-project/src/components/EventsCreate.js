import React, {Component} from 'react';
import {Card,CardItem,Button} from './common';
import {connect} from 'react-redux';
import {eventUpdate,eventCreate} from "../actions";
import EventForm from './EventForm';


class EventsCreate extends Component{
// When button is pressed call action eventCreate and pass props
    onButtonPress(){
        const {eventName,place,kind} = this.props;
        this.props.eventCreate({eventName,place,kind:kind || 'Music'});
    }

    render(){
        return(
          <Card>
             <EventForm { ...this.props} />
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