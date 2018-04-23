import {
    EVENT_UPDATE,
    EVENT_CREATE
} from "../actions/types";

const INITIAL_STATE={
    eventName: '',
    place: '',
    kind : ''
};

export default (state=INITIAL_STATE,action) =>{
    switch (action.type){
        // Event_update takes initial state and what have been specified for values
        case EVENT_UPDATE:
            return{ ...state, [action.payload.prop]: action.payload.value };
        case EVENT_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};