import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import{
    EVENT_UPDATE,
    EVENT_CREATE,
    EVENTS_FETCH_SUCCESS,
    EVENT_SAVE_SUCCESS
} from './types';

// Whenever something is updated(prop) and changed to new value
export const eventUpdate = ({prop,value}) => {
    return{
        type:EVENT_UPDATE,
        payload: {prop,value}
    };
};
// Users can create events in own buckets and then navigate back to eventslist
export const eventCreate = ({eventName,place,kind}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/events`)
            .push({eventName, place, kind})
            .then(() => {
                dispatch({type: EVENT_CREATE});
                Actions.eventsList({ type: 'reset' })
                // Actions.pop()
            });
    };
};
// Get Events list
export const eventsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/events`)
          .on('value', snapshot => {
              dispatch({ type:EVENTS_FETCH_SUCCESS, payload: snapshot.val()} );
          });
  };
};

export const eventSave = ({eventName,place,kind,uid }) =>{
    const { currentUser } = firebase.auth();

    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
            .set({eventName,place,kind})
            .then(() => {
                dispatch({type:EVENT_SAVE_SUCCESS})
               Actions.eventsList({type:'reset'});
            });
    };
};

export const eventDelete = ({uid}) => {
    const { currentUser } = firebase.auth();

    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/events/${uid}`)
            .remove()
            .then(() =>{
                dispatch({type:EVENT_SAVE_SUCCESS})
                Actions.evetsList({type:'reset'});
            });
    };

};