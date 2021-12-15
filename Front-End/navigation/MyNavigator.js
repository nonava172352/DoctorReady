import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
import Information from '../alreadylogin/Information';
import Dooarkan from '../alreadylogin/Dooarkan';

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
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'Prompt-Regular', marginBottom: 10},
        tabBarStyle: { backgroundColor: 'black', height: '10%'},
      }}>
      <Bottomtab.Screen
        name="toLogin"
        component={LoginScreens}
        options={{ tabBarLabel: 'Login',
        tabBarIcon: ({focused}) => (
          <View>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/295/295128.png'}} style={{height: 32, width:32, marginTop:5 }} />
          </View>
        )
        
      }}
      // listeners={({ navigation, route }) => ({
      //   tabPress: () => {
      //     return(       
      //       navigation.navigate("toLogin")
      //     )
      //   },
      // })}
        />
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={Topstack}
        options={{ tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={{uri:'https://iconarchive.com/download/i85581/graphicloads/100-flat/home.ico'}} style={{height: 32, width:32, marginTop:5 }} />
            </View>
          )
        }}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}
        options={{ tabBarLabel: 'โรงพยาบาลใกล้ฉัน',
        tabBarIcon: ({focused}) => (
          <View>
            <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 32, width:32, marginTop:5 }} />
          </View>
        ) }}/>
    </Bottomtab.Navigator>
  );
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
    </MainNavigator.Navigator>
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

function loginNavigator() {
  return (
    <Bottomtab.Navigator
    initialRouteName="หน้าหลัก"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'Prompt-Regular', marginBottom: 10},
        tabBarStyle: { backgroundColor: 'black', height: '10%'},
      }}
      >
      <Bottomtab.Screen
        name="คาดคะเนโรค"
        component={searchscreen}
        options={{
          tabBarLabel: 'คาดคะเนโรค',
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={{uri:'https://www.seekpng.com/png/full/65-659532_magnifying-glass-icon-no-background-magnifying-glass-icon.png'}} style={{height: 32, width:32, marginTop:5 }} />
            </View>
          )
        }}
      />
      <Bottomtab.Screen
        name="หน้าหลัก"
        component={Topstack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={{uri:'https://iconarchive.com/download/i85581/graphicloads/100-flat/home.ico'}} style={{height: 32, width:32, marginTop:5 }} />
            </View>
          )
        }}/>
      <Bottomtab.Screen
        name="โรงพยาบาลใกล้ฉัน"
        component={HospitalmapScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 32, width:32, marginTop:5 }} />
            </View>
          )
        }}/>
      <Bottomtab.Screen
        name="ข้อมูลส่วนตัว"
        component={PersonalInfo}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={{uri:'https://purepng.com/public/uploads/large/purepng.com-settings-icon-android-lollipopsymbolsiconsgooglegoogle-iconsandroid-lollipoplollipop-iconsandroid-50-721522597280v9qzl.png'}} style={{height: 32, width:32, marginTop:5 }} />
            </View>
          )
        }}/>
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
        <MainNavigator.Screen
        name="Information"
        component={Information}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="Dooarkan"
        component={Dooarkan}>
        </MainNavigator.Screen>
    </MainNavigator.Navigator>
  )
}

function searchscreen() {
  return (
    <MainNavigator.Navigator
    initialRouteName="searchscreen"
      screenOptions={{
          headerShown: false,
        }}>
    <MainNavigator.Screen
        name="searchscreen"
        component={Searchguess}>
        </MainNavigator.Screen>
        <MainNavigator.Screen
        name="SearchDetailScreen"
        component={SearchDetail}>
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
  console.log(user)
  dispatch(userActionSet('sds'));
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
