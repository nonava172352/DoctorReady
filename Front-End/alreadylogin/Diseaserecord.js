import React from 'react';
import {useState} from 'react';
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
  ScrollView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
axios.defaults.timeout = 1000;

import { useSelector, useDispatch } from "react-redux";
import { diseActionSet, userActionSet } from "../store/action/actions"

const Diseaserecord = ({route,navigation}) => {
  const [check, setCheck] = useState(0);
  const user = useSelector((state) => state.redu.user)
  const [name, setName] = useState('');
  const [haveAfever, sethaveAfever] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [pain, setPain] = useState('');
  const [allergicDrug, setallergicDrug] = useState('');
  const [more, setMore] = useState('');

  console.log(name)
  if(check == 0){
    setCheck(1)
    axios({method:"get", url:`http://192.168.1.40:8083/getSymtom/${user.email}` }).then((response) =>{

      if(response.data){
        setName(response.data.symptom)
        sethaveAfever(response.data.haveFever)
        setSelectedLanguage(response.data.setSymptomDuration)
        setPain(response.data.painPosition)
        setallergicDrug(response.data.drugAllergy)
        setMore(response.data.more)
      }
    })
  }
  console.log(pain)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 35, paddingBottom: 20, paddingTop: 20, fontFamily: 'Prompt-Regular',color: '#51E2D8'}}>บันทึกอาการ</Text>
      <ScrollView>
        <Text style={styles.font} >หัวข้ออาการ</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name}/>

        <Text style={styles.font}>ระยะเวลาของอาการ</Text>
        <Picker
          style={{borderWidth: 0.5}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="ไม่มีอาการ" value="ไม่มีอาการ"/>
          <Picker.Item label="น้อยกว่า 7 วัน" value="น้อยกว่า 7 วัน" />
          <Picker.Item label="7-14 วัน" value="7-14 วัน" />
          <Picker.Item label="มากกว่า 14 วัน" value="มากกว่า 14 วัน" />
        </Picker>


        <Text style={styles.font}>มีไข้ไหม</Text>
        <TextInput style={styles.input} onChangeText={sethaveAfever} value={haveAfever}/>

        <Text style={styles.font}>ปวดส่วนใดบ้าง</Text>
        <TextInput style={styles.input} onChangeText={setPain} value={pain} />

        <Text style={styles.font}>ยาที่เเพ้</Text>
        <TextInput style={styles.input} onChangeText={setallergicDrug} value={allergicDrug} />

        <Text style={styles.font}>อาการเพิ่มเติม</Text>
        <TextInput style={styles.input} onChangeText={setMore} value={more} />
      </ScrollView>
      {/* <ScrollView style={{width: 70, marginTop: 12}}> */}
        {/* <Button
          title="บันทึก"
          color="green"
          onPress={() =>{
            axios({method:"post", url:"http://192.168.1.40:8083/symptom",
            data:{
              symptom:name,
              symptomDuration:setSelectedLanguage ,
              haveFever:haveAfever,
              painPosition:pain,
              drugAllergy:allergicDrug,
              more:more,
              email:user.email
          }}).then((response) =>{
            if(response.data){
              console.log(response.data)
              Alert.alert('บันทึกเรียบร้อยแล้ว')    
            }else{
              Alert.alert('ไม่สามารถติดต่อกับฐานข้อมูลได้:)')
            }
        })    
          }}
        /> */}
        <View style={{flexDirection: 'row', width: '50%', marginRight: '13%', marginBottom: '10%'}}>
        <TouchableOpacity
            style={{
              height: 50,
              width: '60%',
              marginTop: 0,
              marginRight: 10,
              borderRadius: 10,
              backgroundColor: '#32F466',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>{
              axios({method:"post", url:"http://192.168.1.40:8083/symptom",
              data:{
                symptom:name,
                symptomDuration:setSelectedLanguage ,
                haveFever:haveAfever,
                painPosition:pain,
                drugAllergy:allergicDrug,
                more:more,
                email:user.email
            }}).then((response) =>{
              if(response.data){
                console.log(response.data)
                Alert.alert('บันทึกเรียบร้อยแล้ว')    
              }else{
                Alert.alert('ไม่สามารถติดต่อกับฐานข้อมูลได้:)')
              }
          })    
            }}><Text
            style={{
              fontSize: 25,
              color: 'white',
              fontFamily: 'Prompt-Regular',
            }}>
            บันทึก
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 50,width: '60%',borderRadius: 10, backgroundColor: '#51E2D8', justifyContent: 'center', alignItems: 'center'}} onPress={() => {
              return navigation.navigate('Dooarkan', {
                screen: 'Dooarkan',
                params: {name: name},
              });
            }}>
            <Text style={{fontSize: 25, color: 'white', fontFamily: 'Prompt-Regular'}}>ดูอาการ</Text>
          </TouchableOpacity>
          </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 1,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 7,
    fontFamily: 'Prompt-Regular'
  },
  font: {
    fontSize: 17,
    fontFamily: 'Prompt-Regular',
    color: 'black'
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Diseaserecord;