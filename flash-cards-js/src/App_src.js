import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import redusers from "./reducers";
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App_src = () => {
  return (
    <Provider store={createStore(redusers)}>
      <View style={{flex:1}}>
      <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
};
export default App_src;
