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
import {Diseaserecord} from "./Diseaserecord";
const PersonalInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.font}>
        <Text style={{fontSize: 35, color: '#01B3CD', fontFamily: 'Prompt-Regular'}}>ข้อมูลส่วนตัว</Text>
      </View>
      <View style={{marginBottom: 50}}>
        <List.Item
          title="อาการที่บันทึกไว้"
          titleStyle={{fontSize: 17, fontFamily: 'Prompt-Regular'}}
          style={{
            borderWidth: 0,
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,      
          }}
          
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => {
            return(
              navigation.navigate("Diseaserecord")
            )
          }}
        />
        <List.Item
          title="ข้อมูลส่วนตัว"
          titleStyle={{fontSize: 17, fontFamily: 'Prompt-Regular'}}
          style={{
            borderWidth: 0,
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,       
          }}
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => {
            return(
              navigation.navigate("Information")
            )
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: 1,
        }}>
        {/* <View style={{width: '40%'}}> */}
          {/* <Button
            title="Logout"
            color="red"
            onPress={() => {
              dispatch(userActionSet())

              return(
                
                navigation.navigate("LogOut")
              )
            }}
          /> */}
          <TouchableOpacity style={{ height: 50,width: '95%', marginTop: '75%',borderRadius: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} onPress={() => {
              dispatch(userActionSet())

              return(
                
                navigation.navigate("LogOut")
              )
            }}>
            <Text style={{fontSize: 25, color: 'white', fontFamily: 'Prompt-Regular'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
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
