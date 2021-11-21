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

const DiseaseDetailsScreens = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [search, setSearch] = useState('');

  return (
    <ScrollView>
      <View style={styles.font}>
        <Text style={{fontSize: 35, fontWeight: '600'}}>ข้อมูลโรค</Text>
      </View>
      <View style={{marginLeft: 15, width: '94%', marginBottom: 25}}>
        <View style={{marginBottom: 7}}>
          <Text style={{fontSize: 27, fontWeight: '600'}}>โรคเบาหวาน</Text>
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

export default DiseaseDetailsScreens;
