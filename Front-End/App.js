import React from "react";
import MyNavigator from './navigation/MyNavigator';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import disease  from "./store/reducers/reducers";
const rootReducer = combineReducers({
  redu: disease,
});
const store = createStore(rootReducer);
export default function App(){
  return(
    <Provider store={store}>
    <MyNavigator/>
    </Provider>
  )
}

