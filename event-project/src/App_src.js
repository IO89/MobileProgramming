import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App_src extends Component{

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDfj2a8PvVaKjTSKDNRnW4gOarB1EbJn34",
            authDomain: "events-78ba6.firebaseapp.com",
            databaseURL: "https://events-78ba6.firebaseio.com",
            projectId: "events-78ba6",
            storageBucket: "events-78ba6.appspot.com",
            messagingSenderId: "1006964101485"
        };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers)}>
           <LoginForm/>
        </Provider>
        );
    }
}

export default App_src;
