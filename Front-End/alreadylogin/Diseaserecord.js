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
  ScrollView,
  Platform
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Diseaserecord = () => {
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [currentDate, setCurrentData] = useState('');
  
  // console.log(currentDate);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [gettime, setGettime] = useState([]);

  console.log(date)

  console.log(gettime)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentData(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    );
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 35, paddingBottom: 20, paddingTop: 20}}>บันทึกอาการ</Text>
      <ScrollView>

        <Text style={{fontSize: 12, marginLeft: '10%'}}>วันที่เเละเวลาปัจจุบัน {currentDate}</Text>  

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

        <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </ScrollView>
      <ScrollView style={{width: 70, marginTop: 12}}>
        <Button
          title="บันทึก"
          color="green"
          onPress={() => setGettime(date)}
        />
      </ScrollView>
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
    borderRadius: 7
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
