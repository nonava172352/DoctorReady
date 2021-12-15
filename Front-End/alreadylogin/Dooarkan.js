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
  
  const Dooarkan = ({route, navigation}) => {
    console.log(route.params.name)
      return (
          <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
              <Text style={{fontSize: 35, paddingBottom: 20, paddingTop: 20, marginLeft: '35%', fontFamily: 'Prompt-Regular', color: '#01B3CD'}}>ดูอาการ</Text>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 25,  fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ชื่ออาการ</Text>
              <Text style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>{route.params.name}</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 75, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ระยะเวลาของอาการ</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>ข้อมูลที่ดึงมา</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 132, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>มีไข้ไหม</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>ข้อมูลที่ดึงมา</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 114, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ปวดส่วนใดบ้าง</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>ข้อมูลที่ดึงมา</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%'}}>
              <Text style={{marginRight: 117, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>ยาที่เเพ้</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>ข้อมูลที่ดึงมา</Text>
              </View>
              <View style={{marginLeft: 25, marginBottom: '5%', marginBottom: '15%'}}>
              <Text style={{marginRight: 117, fontSize: 25, marginBottom: '2%', fontFamily: 'Prompt-Regular',color: 'black'}}>อาการเพิ่มเติม</Text>
              <Text  style={{fontSize: 20, fontFamily: 'Prompt-Regular'}}>ข้อมูลที่ดึงมา</Text>
              </View>
              <View>
              <TouchableOpacity
            style={{
              height: 50,
              width: '92%',
              marginTop: '-10%',
              marginLeft: '4%',
              borderRadius: 10,
              backgroundColor: '#51E2D8',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
                return(
                    navigation.navigate("Diseaserecord")
                  )
            }}
            >
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

  export default Dooarkan;