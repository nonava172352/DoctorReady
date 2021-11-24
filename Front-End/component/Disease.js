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
  ScrollView,
} from 'react-native';
import {Searchbar, List} from 'react-native-paper';

const Disease = ({route, navigation}) => {
  console.log("===1")
  console.log(route)
  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600', color: 'white'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 27, fontWeight: '600',}}>{route.params.disease}</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
          {route.params.sympton}
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 27, fontWeight: '600',}}>สาเหตุ</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
          {route.params.cause}
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 27, fontWeight: '600',}}>หลักการป้องกันโรค</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
          {route.params.prevent}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  font: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: 'red',
    padding: 15,
    backgroundColor: 'black'
  },
});

export default Disease;
