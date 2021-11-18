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
import DiseaseList from '../DiseaseList.json'

const SearchDetail = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');
  

  return (
    <SafeAreaView>
      <View style={styles.Headers}>
        <Text style={{fontSize: 35}}>คาดคะเนโรคเบื้องต้น</Text>
      </View>
      <View style={styles.head}>
        <Text style={{fontSize: 25}}>โรคที่มีอาการข้างต้น</Text>
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
