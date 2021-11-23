import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  Switch,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {firebaseConfig} from '../firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from "react-redux";
import { diseActionSet, userActionSet } from "../store/action/actions"
import axios from 'axios';
axios.defaults.timeout = 1000;

const SignupScreens = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [detail, setDetail] = useState('');

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  // const [we]
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      <View style={styles.font}>
        <Text style={{fontSize: 50, paddingBottom: 20}}>DoctorReady</Text>
      </View>
      <ScrollView>
        <View style={{marginLeft: '13%'}}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            placeholder="Username"
            // value={username}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}

            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setName}

            placeholder="ชื่อ-นามสกุล"
          />
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 9,
              marginTop: 9,
              marginLeft: 9,
            }}>
            <TextInput
              style={styles.boder}
              onChangeText={setWeight}

              placeholder="น้ำหนัก"
            />
            <TextInput
              style={{width: 125, height: 40, borderRadius: 5, borderWidth: 1, padding: 10}}
              onChangeText={setHeight}

              placeholder="ส่วนสูง"
            />
          </View>

          <TextInput
            style={styles.input}
            onChangeText={setAge}
            placeholder="อายุ"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDetail}

            placeholder="โรคประจำตัว"
          />
        </View>
      </ScrollView>
      <View style={{width: '30%', marginTop: 15, marginLeft: '35%'}}>
        <Button
          title="Signup"
            onPress={() => {
              if(username == "" || password == "" || email =="" || name == ""|| weight == ""|| height == ""|| age == "" || detail == ""){
                Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน")
              }
              else if(password.length < 8){
                Alert.alert('รหัสผ่านต้องมากกว่า 8 ตัว')  
              }else if(!validateEmail(email)){
                Alert.alert('รูปแบบ email ไม่ถูกต้อง')
              }else{

                axios({method:"post", url:"http://192.168.1.38:8083/register", data:{email : email, password:password, username:username , name: name, weight:weight, height: height, detail: detail} }).then(
                  (response) =>{
                    dispatch(userActionSet(response.data))
                    console.log(response.data)
                  
                  }
                ).catch((error) => {console.log(error) 
                  Alert.alert('ไม่สามารถเชื่อมต่อกับ Database ได้')})
                
              }


          
          }
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 9,
    borderWidth: 1,
    padding: 10,
    width: 270,
    borderRadius: 5,
    padding: 10
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    alignItems: 'center',
    marginTop: 25,
  },
  boder: {
    borderRadius: 5,
    borderWidth: 1,
    width: 125,
    marginRight: 20,
    height: 40,
    padding: 10
  },
});

export default SignupScreens;
