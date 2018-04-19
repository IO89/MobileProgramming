import React from 'react';
import { Scene, Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EventsList from './components/EventsList';
import EventsCreate from './components/EventsCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
            <Scene key="login" component={LoginForm} title="Please Login"  />
            <Scene
                key="eventsList"
                component={EventsList}
                title="Events List"
                initial
            />
                <Scene key="eventsCreate" component={EventsCreate} title="Create an Event" />
            </Scene>
        </ Router>
    );
};

export default RouterComponent;
