import React,{Component} from 'react';
import {Card,CardItem,Button,Confirm} from "./common";
import EventForm from './EventForm';
import {connect} from 'react-redux';
import {eventUpdate, eventSave,eventDelete} from '../actions';
import _ from 'lodash';

class EventEdit extends Component{

    state = {showModal:false};

    // takes all attributes from event and put into form reducer
    componentWillMount(){
        _.each(this.props.event.item, (value,prop) => {
            this.props.eventUpdate({prop,value});
        });
    }

    onButtonPress(){
        const {eventName,place,kind} = this.props;
        this.props.eventSave({eventName,place,kind, uid: this.props.event.item.uid })
    }

    onAccept(){
        const {uid} = this.props.event.uid;
        this.props.eventDelete({uid});
    }

    onDecline(){
        this.setState({showModal:false});
    }

    render(){
        return(
            <Card>
                <EventForm />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Update
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={() => this.setState({showModal:!this.state.showModal})}>
                        Delete Event
                    </Button>
                </CardItem>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Do you want to delete this event?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {eventName,place,kind } = state.eventForm;
    return {eventName,place,kind };
};

export default connect(mapStateToProps,{
    eventUpdate,
    eventSave,
    eventDelete
}) (EventEdit);