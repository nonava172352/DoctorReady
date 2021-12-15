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
import {Searchbar} from 'react-native-paper';
const test = (disease) => {
  // let list_value = []
  const list_key= []
  disease.forEach(element => {
    list_key.push((Object.keys(element))[0])
    // list_value.push((Object.values(element))[0])
  });
  console.log(list_key)
  return list_key
  

}

const SearchDetail = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [disease, setDisease] = useState(route.params.collect)

  return (
    <SafeAreaView>
      <View style={styles.Headers}>
        <Text style={{
            fontSize: 35,
            color: '#01B3CD',
            fontFamily: 'Prompt-Regular',
          } }>โรคที่ตรงกับอาการ</Text>
      </View>
      <View style={styles.head}>
      <FlatList data={test(disease)} renderItem={({item}) =>{
        
        return(
          <TouchableOpacity
          style={{
            marginBottom: 7,
            backgroundColor: '#51E2D8',
            width: 370,
            borderRadius: 7
          }}>
        <Text style={{fontSize: 17, padding: 15, color: "white", fontFamily: 'Prompt-Regular'}}>{item}</Text>
        </TouchableOpacity>
        )
      }}>

      </FlatList>

      </View>
      
      <View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Headers: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  head: {
    marginLeft: 10
  }
});

export default SearchDetail;
