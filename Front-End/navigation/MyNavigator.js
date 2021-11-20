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
import MainScreensLogin from '../alreadylogin/MainScreens';
import Allsearch from '../alreadylogin/Allsearch';

const MainNavigator = createNativeStackNavigator();

const Bottomtab = createBottomTabNavigator();

function NotloginNavigator() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Bottomtab.Screen
        name="Login"
        component={LoginScreens}></Bottomtab.Screen>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}></Bottomtab.Screen>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}></Bottomtab.Screen>
    </Bottomtab.Navigator>
  );
}
function loginNavigator() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Bottomtab.Screen
        name="คาดคะเนโรค"
        component={Searchguess}></Bottomtab.Screen>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}></Bottomtab.Screen>
      {/* <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}></Bottomtab.Screen> */}
      <Bottomtab.Screen
        name="ข้อมูลส่วนตัว"
        component={Diseaserecord}></Bottomtab.Screen>
    </Bottomtab.Navigator>
  );
}

function signup () {
  return (
    <MainNavigator.Navigator
      screenOptions={{
          headerShown: false,
        }}
        name="Signup"
        component={SignupScreens}>
          
    </MainNavigator.Navigator>
  )
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
          component={NotloginNavigator}>

          </MainNavigator.Screen>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
