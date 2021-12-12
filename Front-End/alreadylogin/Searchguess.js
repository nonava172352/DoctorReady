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
import {listdi} from '../data/disease-data';
import listdisease from '../models/listdisease';

import DropDownPicker from 'react-native-dropdown-picker';

const Searchguess = () => {
  const [selectedId, setSelectedId] = useState(null);

  // const [search, setSearch] = useState(null);
  const [collect, setCollect] = useState([]);
  const [Filterseacrh, setFilterFunction] = useState([]);
  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label:'ปัสสาวะบ่อย',value:'ปัสสาวะบ่อย'},
    {label:'ระดับน้ำตาลในเลือดสูง',value:'ระดับน้ำตาลในเลือดสูง'}
  ]);
  console.log(collect)

  const addArray = () => {
    if (value != null) {
      setCollect([...collect, value]);
      setValue(null);
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
          backgroundColor: 'black',
          width: 370,
          borderRadius: 15,
        }}>
        <Text
          style={{fontSize: 17, padding: 15, color: 'white'}}
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

  console.log(Filterseacrh);
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
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, color: '#01B3CD'}}>
          คาดคะเนโรคเบื้องต้น
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize: 1,
          marginBottom: 10,
        }}>
        <View style={{width: '85%'}}>
        <DropDownPicker
          placeholder="โปรดเลือกอาการอย่างน้อย 1 อาการ"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        </View>
        {/* <Searchbar
          style={{width: 300}}
          placeholder="โปรดใส่อาการ"
          onChangeText={text => setSearch(text)}
          value={search}
        /> */}
        <View style={{height: 44, justifyContent: 'center', marginLeft: 10}}>
          <Button title="+" color="green" onPress={() => addArray()} />
        </View>
      </View>
      <View style={{zIndex: -1}}>
        <FlatList data={collect} renderItem={ItemView} />
      </View>

      <View>
        <View style={{width: '20%', marginLeft: '77%', marginBottom: 3, zIndex: -1}}>
          <Button
            title="search"
            color="#01B3CD"
            onPress={() => searchFil(collect)}
          />
        </View>
        <View style={{width: '20%', marginLeft: '77%', zIndex: -1}}>
          <Button
            title="clear"
            color="red"
            onPress={() => (setCollect(''), setFilterFunction([]))}
          />
        </View>
      </View>
      <View style={{marginTop: 7}}>
        <FlatList data={Filterseacrh} renderItem={ItemView2} />
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
