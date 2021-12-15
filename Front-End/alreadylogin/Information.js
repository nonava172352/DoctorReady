import React from 'react';
import {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    Switch,
    Button,
    TouchableOpacity,
    Alert,
    FlatList,
    StatusBar,
    ScrollView,
  } from 'react-native';
  import {useSelector, useDispatch} from 'react-redux';
import {diseActionSet, userActionSet} from '../store/action/actions';



  const Information = ({navigation}) => {
    const data = useSelector((state)=> state.redu.user)
    console.log(data)
      return (
          <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
              <Text style={{fontSize: 35, paddingBottom: 20, paddingTop: 20, marginLeft: '25%', fontFamily: 'Prompt-Regular', color: '#01B3CD'}}>ข้อมูลส่วนตัว</Text>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 25,  fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ชื่อ-นามสกุล</Text>
              <Text style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{data.name}</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 75, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>อีเมลล์</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{data.email}</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 132, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>อายุ</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{data.age}</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 114, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>น้ำหนัก</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{data.weight}</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%', marginBottom: '15%'}}>
              <Text style={{marginRight: 117, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ส่วนสูง</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{data.height}</Text>
              </View>
              <View>
              <TouchableOpacity
            style={{
              height: 50,
              width: '92%',
              marginTop: 0,
              marginLeft: '4%',
              borderRadius: 10,
              backgroundColor: '#51E2D8',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
                return(
                    navigation.navigate("ข้อมูลส่วนตัว")
                  )
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontFamily: 'Prompt-Regular',
              }}>
              ย้อนกลับ
            </Text>
          </TouchableOpacity></View>
          </SafeAreaView>
      )
  }

  export default Information;