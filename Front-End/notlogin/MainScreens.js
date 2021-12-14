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
import { useSelector, useDispatch } from "react-redux";
import {List, Searchbar} from 'react-native-paper';
import axios from "axios"
import { diseActionSet } from "../store/action/actions"
import { listdi } from "../data/disease-data"

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



const MainScreens = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [namedi, setNamedi] = useState([]);
  const dispatch = useDispatch()

  // console.log(listdi)
  useEffect(() => {
    setFilteredDataSource(listdi);
    setNamedi(listdi);
    // setFilteredDataSource(listdi);
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setFilteredDataSource(responseJson);
    //     setMasterDataSource(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    //   axios({method:"get", url:"http://192.168.1.38:8082/disease"}).then((response) =>{
    //     dispatch(diseActionSet(response.data))
    //     const data = useSelector((state) => state.redu.dise)
    //     console.log(data)
        
    //   })

  }, []);


  // const searchFilterFunction = (text) => {
  //   if (text) {
  //     const newData = masterDataSource.filter(function (item) {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = namedi.filter(function (item) {
        const itemData = item.disease
          // ? item.disease.toUpperCase()
          // : ''.toUpperCase();
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(namedi);
      setSearch(text);
    }
  };

// console.log(filteredDataSource)

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
      style={{
        marginLeft: 12,
        marginBottom: 7,
        backgroundColor: 'black',
        width: 370,
        borderRadius: 7
      }}>
       
      <Text style={{fontSize: 17, padding: 15, color: "white", fontFamily: 'Prompt-Regular'}} onPress={() => {
        return(
          navigation.navigate("Toptab", {screen:"รายละเอียดโรค", params:{disease: item.disease, sympton: item.sympton, cause: item.cause, prevent: item.prevent}})
        )
      }}>
        {item.disease}
      </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.font}>
        <Text style={{fontSize: 35, color: '#01B3CD', fontFamily: 'Prompt-Regular', }}>ข้อมูลโรค</Text>
      </View>
      <View style={{alignItems: 'center', marginBottom: 12}}>
        <Searchbar
          style={{width: 370}}
          placeholder="ค้นหาโรค"
          inputStyle={{backgroundColor: 'white', color: 'black', fontFamily: 'Prompt-Regular'}}
          onChangeText={(text) => searchFilterFunction(text)}
          // value={search}
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