import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigator from './navigation/MyNavigator'
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { reducers } from "./store/reducers/reducers";

const rootReducer = combineReducers({
  red : reducers
})
const store = createStore(rootReducer);
export default function App(){
  return(
    <Provider store={store}>
    <MyNavigator/>
    </Provider>
  )
}

