import React from 'react';
import {StyleSheet} from 'react-native';
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
import { useSelector, useDispatch } from "react-redux";
import { diseActionSet, userActionSet } from "../store/action/actions"
// import { FaBeer } from 'react-icons/fa';
// import Ionicons from 'react-native-vector-icons/Ionicons';

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
        component={LoginScreens}
        options={{ tabBarLabel: 'Login'}}/>
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={Topstack}
        options={{ tabBarLabel: 'หน้าหลัก' }}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}
        options={{ tabBarLabel: 'โรงพยาบาลใกล้ฉัน' }}/>
    </Bottomtab.Navigator>
  );
}

function Topstack() {
  return (
    <MainNavigator.Navigator
    initialRouteName="Main"
      screenOptions={{
          headerShown: false,
        }}>
    <MainNavigator.Screen
        name="Main"
        component={MainScreens}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="Toptab"
        component={ToptabNavigator}>
        </MainNavigator.Screen>
  </MainNavigator.Navigator>
  )
}

function ToptabNavigator({route, navigation}) {
  // console.log("====")
  // console.log(route.params)
  return (
    <MainNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#01B3CD' }
      }}>
      <MainNavigator.Screen
        name="รายละเอียดโรค"
        component={Disease}
        options={{ tabBarLabel: 'รายละเอียดโรค'}, {route:route}
      }
        />
      {/* <TopTab.Screen
        name="name2"
        component={Sympton}
        options={{ tabBarLabel: 'อาการ' }}/>
      <TopTab.Screen
        name="สาเหตุ"
        component={Cause}
        options={{ tabBarLabel: 'สาเหตุ' }}/>
      <TopTab.Screen
        name="ป้องกันโรค"
        component={Prevent}
        options={{ tabBarLabel: 'หลักการป้องกันโรค' }}/> */}
    </MainNavigator.Navigator>
  );
}

function loginNavigator() {
  return (
    <Bottomtab.Navigator
    initialRouteName="หน้าหลัก"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#01B3CD' },
        color: 'black'
      }}
      >
      <Bottomtab.Screen
        name="คาดคะเนโรค"
        component={Searchguess}
        options={{
          tabBarLabel: 'คาดคะเนโรค',
          // tabBarIcon: ({ color, size }) => (
          //   <FaBeer name="home" color={color} size={size}/>
          // ),
        }}
      />
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={Topstack}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}/>
      <Bottomtab.Screen
        name="ข้อมูลส่วนตัว"
        component={PersonalInfo}/>
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
        component={loginNavigator}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="LogOut"
        component={signup}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="Diseaserecord"
        component={Diseaserecord}>
        </MainNavigator.Screen>
    </MainNavigator.Navigator>
  )
}


function signup () { 
  return (
    <MainNavigator.Navigator
      screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen
        name="Login"
        component={NotloginNavigator}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="Signup"
        component={SignupScreens}>
        </MainNavigator.Screen>
    </MainNavigator.Navigator>
  )
}



export default function MyNavigator() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.redu.user);
  dispatch(userActionSet('test'))
  console.log(user)
  if (user != null) {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen
          name="log"
          component={Personal}>
          </MainNavigator.Screen>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
  }
  else {
        return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainNavigator.Screen
          name="Notlog"
          component={signup}>
          </MainNavigator.Screen>
      </MainNavigator.Navigator>
    </NavigationContainer>
    )
  }
}
