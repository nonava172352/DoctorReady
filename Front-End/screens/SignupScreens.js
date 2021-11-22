import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { diseActionSet } from "../store/action/actions"
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
import { firebaseConfig } from "../firebase"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';

const SignupScreens = () => {
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(username);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <Text style={{fontSize: 50, paddingBottom: 20}}>DoctorReady</Text>
      <TextInput
        style={styles.input}
        // onChangeText={username}
        placeholder="Username"
        // value={username}
      />
      <TextInput
        style={styles.input}
        // onChangeText={password}
        value={password}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        // onChangeText={password}

        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        // onChangeText={password}

        placeholder="ชื่อ-นามสกุล"
      />
      <View style={{flexDirection: 'row', marginBottom: 9, marginTop: 9,marginLeft:9}}>
        <TextInput
          style={{width: 125, borderWidth: 0.5, marginRight: 20, height: 40}}
          // onChangeText={password}

          placeholder="น้ำหนัก"
        />
        <TextInput
          style={{width: 125, borderWidth: 0.5, height: 40}}
          // onChangeText={password}

          placeholder="ส่วนสูง"
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={password}

        placeholder="อายุ"
      />
      <TextInput
        style={styles.input}
        // onChangeText={password}

        placeholder="โรคประจำตัว"
      />
      
      <View style={{width: 70, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Signup"
        //   onPress={() => {Alert.alert('Simple Button pressed')
        //   const data = useSelector((state) => state.redu.dise)
        //   console.log(data)
        // }
        />
      </View>
      </ScrollView>
      
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 9,
    borderWidth: 0.5,
    padding: 10,
    width: 270,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default SignupScreens;
