import{
    EVENT_UPDATE
} from './types';

// Whenever something is updated(prop) and changed to new value
export const eventUpdate = ({prop,value}) => {
    return{
        type:EVENT_UPDATE,
        payload: {prop,value}
    };
};

export const eventCreate = ({eventName,place,kind}) => {

};