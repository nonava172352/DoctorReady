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
import PersonalInfo from '../alreadylogin/PersonalInfo';
import DiseaseDetailsScreens from '../notlogin/DiseaseDetailsScreens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Disease from '../component/Disease';
import Sympton from '../component/Symptom';
import Prevent from '../component/Prevent';
import Cause from '../component/Cause';

const MainNavigator = createNativeStackNavigator();

const Bottomtab = createBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

function NotloginNavigator() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Bottomtab.Screen
        name="Login"
        component={LoginScreens}/>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}/>
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
        component={Searchguess}/>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}/>
      <Bottomtab.Screen
        name="ข้อมูลส่วนตัว"
        component={PersonalInfo}/>
    </Bottomtab.Navigator>
  );
}

function ToptabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#01B3CD' }
      }}>
      <TopTab.Screen
        name="รายละเอียดโรค"
        component={Disease}
        options={{ tabBarLabel: 'รายละเอียดโรค' }}/>
      <TopTab.Screen
        name="อาการ"
        component={Sympton}
        options={{ tabBarLabel: 'อาการ' }}/>
      <TopTab.Screen
        name="สาเหตุ"
        component={Cause}
        options={{ tabBarLabel: 'สาเหตุ' }}/>
      <TopTab.Screen
        name="ป้องกันโรค"
        component={Prevent}
        options={{ tabBarLabel: 'หลักการป้องกันโรค' }}/>
    </TopTab.Navigator>
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
          component={ToptabNavigator}>

          </MainNavigator.Screen>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
