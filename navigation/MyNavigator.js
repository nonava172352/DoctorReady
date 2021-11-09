import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreens from "../screens/LoginScreens";
import SignupScreens from "../screens/LoginScreens";

const MainNavigator = createNativeStackNavigator();


export default function MyNavigator() {
    return (
        <NavigationContainer>
            <MainNavigator.Navigator>
                <MainNavigator.Screen 
                    name="Login"
                    component={LoginScreens}
                    ></MainNavigator.Screen>
                <MainNavigator.Screen>
                </MainNavigator.Screen>
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}