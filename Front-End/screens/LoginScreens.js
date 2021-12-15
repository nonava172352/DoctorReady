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
import {useSelector, useDispatch} from 'react-redux';
import {diseActionSet, userActionSet} from '../store/action/actions';
const LoginScreens = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.redu.user);
  axios.defaults.timeout = 1000;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 50,
            paddingBottom: 20,
            fontFamily: 'Prompt-SemiBold',
            color: '#01B3CD',
          }}>
          Doctor
        </Text>
        <Text
          style={{
            fontSize: 50,
            paddingBottom: 20,
            fontFamily: 'Prompt-SemiBoldItalic',
            color: '#01B3CD',
          }}>
          Ready
        </Text>
      </View>
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

      <View style={{flexDirection: 'row', marginBottom: 20, alignItems: 'center', marginRight: '4%'}}>
        <CheckBox
          style={{alignSelf: 'center', marginTop: 5}}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 17, fontFamily: 'Prompt-Regular'}}>Remember me</Text>
        </View>
      </View>

      
        {/* <Button
          title="Login"
          onPress={() => {
            if (email == '') {
              Alert.alert('กรุณากรอก Email');
            } else if (password == '') {
              Alert.alert('กรุณากรอก Password');
            } else {
              axios({
                method: 'post',
                url: 'http://192.168.1.38:8083/login',
                data: {email: email, password: password},
              }).then(response => {
                if (response.data) {
                  dispatch(userActionSet(response.data));
                  Alert.alert('Login สำเร็จ');
                } else {
                  Alert.alert('email หรือ password ไม่ถูกต้อง :)');
                }
              });
            }
          }}
        /> */}
        <TouchableOpacity style={{ height: 50,width: '80%',marginBottom:'1%',marginLeft: '0%', marginTop: 0,borderRadius: 10, backgroundColor: '#01B3CD', justifyContent: 'center', alignItems: 'center'}} onPress={() => {
            if (email == '') {
              Alert.alert('กรุณากรอก Email');
            } else if (password == '') {
              Alert.alert('กรุณากรอก Password');
            } else {
              axios({
                method: 'post',
                url: 'http://192.168.1.40:8083/login',
                data: {email: email, password: password},
              }).then(response => {
                if (response.data) {
                  dispatch(userActionSet(response.data));
                  Alert.alert('Login สำเร็จ');
                } else {
                  Alert.alert('email หรือ password ไม่ถูกต้อง :)');
                }
              });
            }
            }}>
            <Text style={{fontSize: 25, color: 'white', fontFamily: 'Prompt-Regular'}}>Login</Text>
          </TouchableOpacity>

        {/* <Button
          title="Sign Up"
          color="green"
          onPress={() => {
            return navigation.navigate('Signup');
          }}
        /> */}
        <TouchableOpacity style={{ height: 50,width: '80%',marginLeft: '0%', marginTop: 0,borderRadius: 10, backgroundColor: '#50DA57', justifyContent: 'center', alignItems: 'center'}} onPress={() => {
            return navigation.navigate('Signup');
        
            }}>
            <Text style={{fontSize: 25, color: 'white', fontFamily: 'Prompt-Regular'}}>Signup</Text>
          </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={{marginTop: 20}}>เข้าใช้งานโดยไม่ Login</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize:18,
    color:'black',
    fontFamily:'Prompt-Regular',
    height: 55,
    margin: 12,
    padding: 10,
    paddingLeft: 20,
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#01B3CD",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    
    elevation: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default LoginScreens;
