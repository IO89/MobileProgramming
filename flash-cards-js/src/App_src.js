import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import redusers from "./reducers";

const App_src = () => {
  return (
    <Provider store={createStore(redusers)}>
      <View>
        <Text>new app src</Text>
      </View>
    </Provider>
  );
};
export default App_src;
