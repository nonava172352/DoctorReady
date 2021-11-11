import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreens from './screens/LoginScreens'
import SignupScreens from './screens/SignupScreens'
import MyNavigator from './navigation/MyNavigator'

export default function App(){
  return(

    <MyNavigator/>
  )
}

