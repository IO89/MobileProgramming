import React,{Component} from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';


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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <View style={{height:600, width:320}}>
            <Provider store={store}>
                <Router />
            </Provider>
            </View>
        );
    }
}

export default App_src;
