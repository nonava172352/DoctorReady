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

const LoginScreens = () => {
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(username)
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 50, paddingBottom: 20}}>DoctorReady</Text>
      <TextInput
        style={styles.input}
        onChangeText={username}
        placeholder="Username"
        // value={username}
      />
      <TextInput
      
        style={styles.input}
        // onChangeText={password}
        value={password}
        placeholder="Password"
      />
      
      <View style={{flexDirection: "row",marginBottom: 20,}}>
      <CheckBox 
        style={{alignSelf: "center"}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text >Remember me</Text>
      </View>
      
      <View style={{width: 70, marginBottom: 12, borderRadius: 50}}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <View style={{width: 100}}>
        <Button
          title="Sign Up"
          onPress={() => Alert.alert('Simple Button pressed')}
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
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreens;
