import { combineReducers } from 'redux';
import Authreducer from './AuthReducer';
import EventsFormReducer from './EventsFromReducer';
import EventReducer from './EventReducer';

export default combineReducers({
    auth: Authreducer,
    eventForm: EventsFormReducer,
    events: EventReducer
});
