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
import {Searchbar} from 'react-native-paper';

const MainScreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // console.log(username)
  return (
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35}}>ข้อมูลโรค</Text>
      </View>
      <View style={{alignItems:'center'}}> 
      <Searchbar style={{width: 370,}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  font: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25
    
  }
});

export default MainScreens;
