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
import {Picker} from '@react-native-picker/picker';

const Diseaserecord = () => {
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  console.log(selectedLanguage);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 50, paddingBottom: 20}}>บันทึกอาการ</Text>
      <View>
        <Text style={styles.font}>หัวข้ออาการ</Text>
        <TextInput style={styles.input} />

        <Text style={styles.font}>ระยะเวลาของอาการ</Text>
        <Picker
          style={{borderWidth: 0.5}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="ไม่มีอาการ" value="ไม่มีอาการ" />
          <Picker.Item label="น้อยกว่า 7 วัน" value="น้อยกว่า 7 วัน" />
          <Picker.Item label="7-14 วัน" value="7-14 วัน" />
          <Picker.Item label="มากกว่า 14 วัน" value="มากกว่า 14 วัน" />
        </Picker>

        <Text style={styles.font}>มีไข้ไหม</Text>
        <TextInput style={styles.input} />

        <Text style={styles.font}>ปวดส่วนใดบ้าง</Text>
        <TextInput style={styles.input} />

        <Text style={styles.font}>ยาที่เเพ้</Text>
        <TextInput style={styles.input} />

        <Text style={styles.font}>อาการเพิ่มเติม</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{width: 70, marginBottom: 12, borderRadius: 50}}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 1,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 0.5,
    padding: 10,
    width: 250,
  },
  font: {
    fontSize: 17,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Diseaserecord;
