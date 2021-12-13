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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { diseActionSet, userActionSet } from "../store/action/actions"
const LoginScreens = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.redu.user)
  axios.defaults.timeout = 1000;

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 50, paddingBottom: 20, fontFamily: 'sans-serif-medium', color: '#01B3CD'}}>DoctorReady</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
        // value={email}
      />
      <TextInput
        style={styles.input}
        // onChangeText={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        placeholder="Password"
      />
      
      <View style={{flexDirection: "row",marginBottom: 20,}}>
      <CheckBox 
        style={{alignSelf: "center"}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <View style={{marginTop: 5}}>
      <Text>Remember me</Text>
      </View>
      </View>
      
      <View style={{width: 70, marginBottom: 12}}>
        <Button
          title="Login"
          onPress={() => {
          if(email == ""){
            Alert.alert('กรุณากรอก Email')
          }else if(password == ""){
            Alert.alert('กรุณากรอก Password')            
          }else{
            axios({method:"post", url:"http://192.168.1.40:8083/login", data:{email : email, password:password} }).then((response) =>{
              if(response.data){
                dispatch(userActionSet(response.data))
                Alert.alert('Login สำเร็จ')    
              }else{
                Alert.alert('email หรือ password ไม่ถูกต้อง :)')
              }
          })    

          }

        }}
        />
      </View>
      <View style={{width: 100}}>
        <Button
          title="Sign Up"
          color="green"
          onPress={() => {
            return(
              navigation.navigate("Signup")
            )
            
          }}
          
        />
      </View>
      <TouchableOpacity>
        <Text style={{marginTop: 20}}>เข้าใช้งานโดยไม่ Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    width: 250,
    borderRadius: 15,

  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreens;
