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
import axios from "axios"
import {Searchbar} from 'react-native-paper';

// const Item = ({item}) => (
//   <TouchableOpacity
//     style={{
//       marginLeft: 12,
//       marginBottom: 7,
//       backgroundColor: 'grey',
//       width: 385,
//     }}>
//     <Text style={{fontSize: 17, padding: 7, color: "white"}}>{item.title}</Text>
//   </TouchableOpacity>
// );



const MainScreens = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
 
  
  useEffect(
    axios({
      method:'get',
      url:"http://localhost:8082/disease",}).then((response) => {
        console.log(response.data)
      })
    , []);



  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity
      style={{
        marginLeft: 12,
        marginBottom: 7,
        backgroundColor: 'grey',
        width: 370,
      }}>

      <Text style={{fontSize: 17, padding: 7, color: "white"}} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
      </TouchableOpacity>
    );
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
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
        />
      </View>
      <View>
        <FlatList
          // data={DATA}
          // renderItem={renderItem}
          // keyExtractor={(item) => item.id}
          // extraData={selectedId}
          data={filteredDataSource}
          renderItem={ItemView}
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
