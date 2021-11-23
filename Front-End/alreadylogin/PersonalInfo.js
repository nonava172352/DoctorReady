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
} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { diseActionSet, userActionSet } from "../store/action/actions"

const PersonalInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35}}>ข้อมูลส่วนตัว</Text>
      </View>
      <View style={{marginBottom: 50}}>
        <List.Item
          title="โรคที่บันทึกไว้"
          style={{
            backgroundColor: '#ccc',
            borderRadius: 5,
            borderColor: 'grey',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,
          }}
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <List.Item
          title="อาการที่บันทึกไว้"
          style={{
            backgroundColor: '#ccc',
            borderRadius: 5,
            borderColor: 'grey',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,
          }}
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <List.Item
          title="ข้อมูลส่วนตัว"
          style={{
            backgroundColor: '#ccc',
            borderRadius: 5,
            borderColor: 'grey',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,
          }}
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: 1,
        }}>
        <View style={{width: '40%'}}>
          <Button
            title="Logout"
            color="red"
            onPress={() => {
              dispatch(userActionSet())

              return(
                
                navigation.navigate("LogOut")
              )
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
});

export default PersonalInfo;
