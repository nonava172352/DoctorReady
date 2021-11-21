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

const Cause = () => {

  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 7}}>
          <Text style={{fontSize: 27, fontWeight: '600'}}>สาเหตุ</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
            โรคเบาหวานมีสาเหตุมาจากการบกพร่องของฮอร์โมนอินซูลิน
            ผู้ที่เป็นเบาหวานจะพบว่าตับอ่อนผลิตอินซูลินได้น้อยหรือผลิตไม่ได้เลย
            หรือผลิตได้ปกติ แต่ประสิทธิภาพของอินซูลินลดลง เช่นที่พบในคนอ้วน
            ซึ่งเรียกว่า “ภาวะดื้อต่ออินซูลิน” (Insulin resistance)
            เมื่อขาดอินซูลินหรืออินซูลินทำหน้าที่ไม่ได้
            น้ำตาลในเลือดจึงเข้าสู่เซลล์ต่าง ๆ ได้น้อยกว่าปกติ
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

export default Cause;
