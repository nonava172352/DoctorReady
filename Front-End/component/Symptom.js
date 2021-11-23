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

const Sympton = ({route, navigation}) => {
  console.log("===2")
  console.log(route.params)
  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 7}}>
          <Text style={{fontSize: 27, fontWeight: '600'}}>อาการ</Text>
        </View>
        <View>
          <Text style={{fontSize: 15}}>
            ในรายที่เป็นไม่มาก (ระดับน้ำตาลในเลือดไม่เกิน 200 มก./ดล.)
            ซึ่งพบได้เป็นส่วนใหญ่ในกลุ่มเบาหวานชนิดที่ 2
            ผู้ป่วยจะยังรู้สึกสบายดีและไม่มีอาการผิดปกติใด ๆ
            และมักตรวจพบได้โดยบังเอิญจากการตรวจปัสสาวะหรือการตรวจเลือดในขณะที่ไปพบแพทย์ด้วยสาเหตุอื่นหรือจากการตรวจสุขภาพทั่วไป
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

export default Sympton;
