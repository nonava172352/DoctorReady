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


const Searchguess = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');
  const [collect, setCollect] = useState([]);
  const [Filterseacrh, setFilterFunction] = useState('');
  
  const addArray = () => {
    setCollect([...collect, search]);
    setSearch('')
  }

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
      style={{
        marginLeft: 12,
        marginBottom: 7,
        backgroundColor: 'black',
        width: 370,
        borderRadius: 15
      }}>

      <Text style={{fontSize: 17, padding: 15, color: "white"}} onPress={() => {
        
      }}>
        {item}
      </Text>
      </TouchableOpacity>
    );
  };

  const searchFil = (collect) => {
    if (collect) {
      const newData = collect.filter(function (item) {
        const itemData = item.disease
          // ? item.disease.toUpperCase()
          // : ''.toUpperCase();
        const collectData = collect;
        return itemData.indexOf(collectData) > -1;
      });
      setFilterFunction(newData);
      // setSearch(collect);
    } else {
      setFilterFunction(namedi);
      // setSearch(collect);
    }
  };

  console.log(collect)

  return (
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, color: '#01B3CD'}}>คาดคะเนโรคเบื้องต้น</Text>
      </View>
      <View style={{alignItems: 'center',flexDirection:'row',justifyContent: "center",fontSize: 1, marginBottom: 10}}>
        <Searchbar
          style={{width: 300}}
          placeholder="โปรดใส่อาการอย่างน้อย 1 อาการ"
          onChangeText={(text) => setSearch(text)}
          value={search}
          
        />
        <View style={{height: 44,justifyContent: "center", marginLeft: 10}}>
        <Button
          title="+"
          color="green"
          onPress={() => addArray()}
        />
        </View>
        
      </View>
      <View>
      <FlatList
          data={collect}
          renderItem={ItemView}
        />
        </View>

        <View>
        <View style={{width: '20%', marginLeft: '77%', marginBottom: 3}}>
        <Button
          title="search"
          color="#01B3CD"
          onPress={() => searchFil(collect)}
        />
        </View>
        <View style={{width: '20%', marginLeft: '77%'}}>
        <Button
          title="clear"
          color="red"
          onPress={() => setCollect('')}
        />
        </View>
        </View>
        <View style={{marginTop: 7}}>
        <FlatList
          data={Filterseacrh}
          renderItem={ItemView}
        />
        </View>
      {/* <View>
      <List.Item
          title="โรคเบาหวาน"
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            borderColor: 'white',
            borderWidth: 1,
            width: '95%',
            marginLeft: 10,
            marginBottom: 10,            
          }}
          right={props => <List.Icon {...props} icon="folder" />}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
      </View> */}
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
