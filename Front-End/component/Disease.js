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

const Disease = ({route, navigation}) => {
  const {disease} = route.params;
  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 7}}>
          <Text style={{fontSize: 27, fontWeight: '600'}}>{disease}</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
            โรคเบาหวาน (Diabetes mellitus : DM, Diabetes)
            เป็นโรคที่มีความผิดปกติเกี่ยวกับการนำน้ำตาลไปใช้ประโยชน์อันเกี่ยวเนื่องกับความบกพร่องของฮอร์โมนอินซูลิน*
            ทำให้ร่างกายมีระดับน้ำตาลในเลือดสูงกว่าปกติ
            หากปล่อยให้ร่างกายอยู่ในสภาวะนี้เป็นเวลานานจะทำให้อวัยวะต่าง ๆ
            เสื่อม ก่อให้เกิดอาการและภาวะแทรกซ้อนต่าง ๆ ตามมา
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  font: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
});

export default Disease;
