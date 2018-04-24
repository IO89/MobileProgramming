import React from 'react';
import { Scene, Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EventsList from './components/EventsList';
import EventsCreate from './components/EventsCreate';
import EventEdit from './components/EventEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            <Scene
                key="eventsList"
                component={EventsList}
                title="Events List"
            />
                <Scene key="eventsCreate" component={EventsCreate} title="Create an Event" />
                <Scene key="eventsEdit" component={EventEdit} title ="Edit Event" />
            </Scene>
        </ Router>
    );
};

export default RouterComponent;
