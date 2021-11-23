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
  

  return (
    <SafeAreaView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, color: '#01B3CD'}}>คาดคะเนโรคเบื้องต้น</Text>
      </View>
      <View style={{alignItems: 'center',flexDirection:'row',justifyContent: "center",fontSize: 1, marginBottom: 10}}>
        <Searchbar
          style={{width: 300}}
          placeholder="โปรดใส่อาการอย่างน้อย 1 อาการ"
          value={search}
        />
        <View style={{height: 44,justifyContent: "center", marginLeft: 10}}>
        <Button
          title="+"
          color="green"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
        
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
