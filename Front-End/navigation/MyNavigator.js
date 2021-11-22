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
    initialRouteName="หน้าหลัก"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#01B3CD' },
      }}>
      <Bottomtab.Screen
        name="toLogin"
        component={signup}
        options={{ tabBarLabel: 'Login'}}/>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={MainScreens}
        options={{ tabBarLabel: 'หน้าหลัก' }}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}
        options={{ tabBarLabel: 'โรงพยาบาลใกล้ฉัน' }}/>
    </Bottomtab.Navigator>
  );
}
function loginNavigator() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#01B3CD' }
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
        component={Personal}/>
    </Bottomtab.Navigator>
  );
}

function Personal () {
  return (
    <MainNavigator.Navigator
    initialRouteName="Personal"
      screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen
        name="Personal"
        component={PersonalInfo}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="LogOut"
        component={signup}>
        </MainNavigator.Screen>
    </MainNavigator.Navigator>
  )
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
        }}>
        <MainNavigator.Screen
        name="Login"
        component={LoginScreens}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="Signup"
        component={SignupScreens}>
        </MainNavigator.Screen>
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
