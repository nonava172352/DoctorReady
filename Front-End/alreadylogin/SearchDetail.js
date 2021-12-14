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


const SearchDetail = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');

  console.log(route.params.collect)
  return (
    <SafeAreaView>
      <View style={styles.Headers}>
        <Text style={{fontSize: 35}}>โรคที่ตรงกับอาการ</Text>
      </View>
      <View style={styles.head}>
        <Text style={{fontSize: 25}}>{route.params.collect}</Text>
      </View>
      
      <View>
          {/* เเสดงข้อมูลโรคที่ตรงกับอาการ */}
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
