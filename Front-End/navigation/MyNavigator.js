import React from 'react';
import {StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreens from '../screens/LoginScreens';
import SignupScreens from '../screens/SignupScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreens from '../notlogin/MainScreens';
import HospitalmapScreens from '../notlogin/HospitalmapScreens';
import Diseaserecord from '../alreadylogin/Diseaserecord';
import Searchguess from '../alreadylogin/Searchguess';
import SearchDetail from '../alreadylogin/SearchDetail';

const MainNavigator = createNativeStackNavigator();

const NotloginBottomtab = createBottomTabNavigator();

function NotloginNavigator() {
  return (
    <NotloginBottomtab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NotloginBottomtab.Screen
        name="Login"
        component={LoginScreens}></NotloginBottomtab.Screen>
      <NotloginBottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}></NotloginBottomtab.Screen>
      {/* <NotloginBottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}></NotloginBottomtab.Screen> */}
    </NotloginBottomtab.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen
          name="Notlog"
          component={SearchDetail}>

          </MainNavigator.Screen>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
