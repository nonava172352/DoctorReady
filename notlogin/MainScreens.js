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
  FlatList,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';
import {Searchbar} from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const DATA = [
  {
    id: 1,
    title: 'Fluke gay',
  },
  {
    id: 2,
    title: 'Art thai',
  },
  {
    id: 3,
    title: 'Q thai',
  },
  {
    id: 4,
    title: 'Non kub',
  },
];
const Item = ({item}) => (
  <TouchableOpacity
    style={{
      marginLeft: 12,
      marginBottom: 7,
      backgroundColor: 'grey',
      width: 385,
    }}>
    <Text style={{fontSize: 17, padding: 7, color: "white"}}>{item.title}</Text>
  </TouchableOpacity>
);

const MainScreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35}}>ข้อมูลโรค</Text>
      </View>
      <View style={{alignItems: 'center', marginBottom: 12}}>
        <Searchbar
          style={{width: 370}}
          placeholder="ค้นหาโรค"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
          // extraData={selectedId}
        />
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

export default MainScreens;
