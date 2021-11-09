import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreens from './screens/LoginScreens'
import SignupScreens from './screens/SignupScreens'

const Navigat = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
    <Navigat.Navigator initialRouteName="Signup">
      <Navigat.Screen  name="Login" component={LoginScreens}></Navigat.Screen>
      <Navigat.Screen  name="Signup" component={SignupScreens}></Navigat.Screen>

      
    </Navigat.Navigator>
  </NavigationContainer>
  )
}

