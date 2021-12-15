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
import {listdi} from '../data/disease-data';
import listdisease from '../models/listdisease';
import axios from 'axios';
import select from "../models/select"

axios.defaults.timeout = 1000;


import DropDownPicker from 'react-native-dropdown-picker';

import SearchableDropdown from 'react-native-searchable-dropdown';

const Searchguess = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  // const [search, setSearch] = useState(null);
  const [check, setCheck] =  useState(0)
  const [Filterseacrh, setFilterFunction] = useState([]);
  const [final, setFinal] = useState([]);
  const [count, setCount] = useState(0);
  const [collect, setCollect] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
  ]);
  if(check == 0){
    setCheck(1)
  axios.get("http://192.168.1.40:8083/allarkarn").then(response =>{
    let data = response.data;
      let list = []
      for(var i = 0; i < data.length; i++ ){
        list.push(new select(data[i], data[i]))
        
      }
      setItems(list)
  })
  }

  const addArray = () => {
    if (value != null) {
      setCollect([...collect, value]);
      console.log(collect);
      setValue(null);
      searchFil(collect);
    } else {
      setValue(null);
    }
  };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 12,
          marginBottom: 7,
          backgroundColor: '#EAEBEB',
          width: 370,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 17,
            padding: 15,
            color: 'black',
            fontFamily: 'Prompt-Regular',
          }}
          onPress={() => {}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemView2 = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 12,
          marginBottom: 7,
          backgroundColor: 'black',
          width: 370,
          borderRadius: 15,
        }}>
        <Text
          style={{fontSize: 17, padding: 15, color: 'white'}}
          onPress={() => {}}>
          {item.disease}
        </Text>
      </TouchableOpacity>
    );
  };

  // console.log(Filterseacrh);
  const searchFil = collect => {
    // console.log(collect.length)
    // console.log(listdi[0].findsympton[1])
    for (var i = 0; i < collect.length; i++) {
      for (var k = 0; k < listdi.length; k++) {
        for (var f = 0; f < listdi[k].findsympton.length; f++) {
          if (collect[i] === listdi[k].findsympton[f]) {
            setFilterFunction([...Filterseacrh, listdi[k]]);
          }
        }
      }
    }
    // if (collect) {
    //   const newData = collect.filter(function (item) {
    //     const itemData = item.disease
    //       // ? item.disease.toUpperCase()
    //       // : ''.toUpperCase();
    //     const collectData = collect;
    //     return itemData.indexOf(collectData) > -1;
    //   });
    //   setFilterFunction(newData);
    //   // setSearch(collect);
    // } else {
    //   setFilterFunction(collect);
    //   // setSearch(collect);
    // }
  };

  // console.log(collect)

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.font}>
        <Text
          style={{
            fontSize: 35,
            color: '#01B3CD',
            fontFamily: 'Prompt-Regular',
          }}>
          คาดคะเนโรคเบื้องต้น
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '85%',
          marginLeft: '4%',
          marginBottom: 10,
          
        }}>
        {/* <ScrollView> */}
        <DropDownPicker
          // nestedScrollEnabled={true}
          searchable={true}
          searchablePlaceholder="ค้นหาอาการ"
          searchableError={() => <Text fontSize={16}>Not found</Text>}
          searchableStyle={{fontSize: 18, borderWidth: 0}}
          dropDownMaxHeight={1000}
          dropDownStyle={{ backgroundColor: 'black', height: '100%' }}
          placeholder="โปรดเลือกอาการอย่างน้อย 1 อาการ"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{
            fontFamily: 'Prompt-Regular',
            fontSize: 16,
          }}
          style={{
            position: 'relative',
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
          }}
          dropDownContainerStyle={{
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
          }}
        />
        
        {/* </ScrollView> */}

        {/* <Searchbar
          style={{width: 300}}
          placeholder="โปรดใส่อาการ"
          onChangeText={text => setSearch(text)}
          value={search}
        /> */}
        <View style={{height: 44, justifyContent: 'center', marginLeft: 10}}>
          <Button title="+" color="#2FF03A" onPress={() => addArray()} />
        </View>
      </View>

      <ScrollView style={{zIndex: -1}}>
        <View style={{zIndex: -1}}>
          <FlatList data={collect} renderItem={ItemView} />
        </View>
      </ScrollView>

      <View>
        <View
          style={{
            width: '50%',
            marginLeft: '3%',
            zIndex: -1,
            flexDirection: 'row',
          }}>
          {/* <Button
            title="search"
            color="#01B3CD"
            // onPress={() => (setFinal(Filterseacrh))}
            onPress={() => {
              return navigation.navigate('คาดคะเนโรค', {
                screen: 'SearchDetailScreen',
                params: {collect: collect},
              });
            }}    
          /> */}
          <TouchableOpacity
            style={{
              height: 50,
              width: '92%',
              marginRight: '4%',
              marginTop: 0,
              borderRadius: 10,
              backgroundColor: '#01B3CD',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              console.log("===")
              console.log(collect)
              console.log("===")
              axios({method:"post", url:"http://192.168.1.40:8083/arkans", data:{"arkan":collect}}).then(response =>{
                console.log("===er")
                console.log(response.data)
              })
              


              return navigation.navigate('คาดคะเนโรค', {
                screen: 'SearchDetailScreen',
                params: {collect: collect},
              });
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontFamily: 'Prompt-Regular',
              }}>
              ค้นหา
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: '92%',
              marginTop: 0,
              borderRadius: 10,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => (
              setCollect(''), setFilterFunction([]), setFinal([])
            )}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontFamily: 'Prompt-Regular',
              }}>
              ล้าง
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginLeft: '2%', zIndex: -1}}> */}
        {/* <Button
            title="clear"
            color="red"
            onPress={() => (
              setCollect(''), setFilterFunction([]), setFinal([])
            )}
          /> */}
        {/* <TouchableOpacity style={{ height: 50,width: '97%', marginTop: 5,borderRadius: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} onPress={() => (
              setCollect(''), setFilterFunction([]), setFinal([])
            )}>
            <Text style={{fontSize: 25, color: 'white', fontFamily: 'Prompt-Regular'}}>Clear</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={{marginTop: 7}}>
        <FlatList data={final} renderItem={ItemView2} />
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

export default Searchguess;
