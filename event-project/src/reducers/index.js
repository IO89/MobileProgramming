import { combineReducers } from 'redux';
import Authreducer from './AuthReducer';
import EventsFormReducer from './EventsFromReducer';

export default combineReducers({
    auth: Authreducer,
    eventForm: EventsFormReducer
});
