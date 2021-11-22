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

const Prevent = () => {

  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 7}}>
          <Text style={{fontSize: 27, fontWeight: '600'}}>
            หลักการป้องกันโรค
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 15}} h1>
            รับประทานอาหารที่มีประโยชน์ มีสารอาหารครบถ้วน และมีกากใยสูง เช่น ผัก
            ผลไม้ ธัญพืช ขนมปังโฮลวีต ข้าวกล้อง
            (อาจแบ่งมื้ออาหารหลักออกเป็นมื้อย่อย ๆ ในแต่ละวัน
            เพื่อช่วยรักษาความสมดุลของน้ำตาลและฮอร์โมนอินซูลิน)
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

export default Prevent;
