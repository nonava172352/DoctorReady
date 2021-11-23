import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {diseActionSet} from '../store/action/actions';
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

const SignupScreens = () => {
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(username);
  return (
    <View>
      <View style={styles.font}>
        <Text style={{fontSize: 50, paddingBottom: 20}}>DoctorReady</Text>
      </View>
      <ScrollView>
        <View style={{marginLeft: '13%'}}>
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
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 9,
              marginTop: 9,
              marginLeft: 9,
            }}>
            <TextInput
              style={styles.boder}
              // onChangeText={password}

              placeholder="น้ำหนัก"
            />
            <TextInput
              style={{width: 125, height: 40, borderRadius: 5, borderWidth: 1, padding: 10}}
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
        </View>
      </ScrollView>
      <View style={{width: '30%', marginTop: 15, marginLeft: '35%'}}>
        <Button
          title="Signup"
          color='green'
          //   onPress={() => {Alert.alert('Simple Button pressed')}
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
