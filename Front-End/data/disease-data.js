import listdisease from '../models/listdisease';
import axios from 'axios';
axios.defaults.timeout = 1000;
export const listdi = [];

axios.get("http://192.168.1.40:8083/disease").then(response =>{
  let data = response.data;
  for(var i = 0;i < data.length;i++){
    listdi.push(new listdisease(data[i].name, data[i].symptom, data[i].information, data[i].cause, data[i].prevent, data[i].findsympton, data[i].treatment))

  }
})


//   new listdisease(
//     'โรคเบาหวาน (Diabetes)',
//     [
//       "รับประทานอาหารที่มีประโยชน์ให้ครบ 5 หมู่ในปริมาณที่เหมาะทุกวัน เน้นผักและผลไม้ชนิดไม่หวานให้มาก ๆ และลดอาหารพวกไขมันชนิดอิ่มตัว แป้ง น้ำตาล ของหวาน และอาหารเค็ม",
//       "ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ปกติ โดยให้มีค่าดัชนีมวลกาย (BMI) น้อยกว่า 23 กก./ม.2 ความยาวรอบเอวน้อยกว่า 90 เซนติเมตรในผู้ชาย และ 80 เซนติเมตรในผู้หญิง ด้วยการควบคุมอาหารและหมั่นออกกำลังกายอย่างสม่ำเสมอ",
//       "ออกกำลังกายแบบแอโรบิกเป็นประจำ เช่น การเดินเร็ว วิ่งเหยาะ ขี่จักรยาน ว่ายน้ำ ครั้งละ 30-45 นาที สัปดาห์ละ 3-5 ครั้ง หรือวันเว้นวัน",
//       "พักผ่อนให้เพียงพอและรักษาสุขภาพจิตให้ดีอยู่เสมอ",
//       "ลดปริมาณของเกลือโซเดียมที่บริโภคไม่ให้เกินวันละ 2.4 กรัม (เทียบเท่าเกลือแกง 6 กรัม หรือประมาณ 1 ช้อนชา)",
//       "ถ้าเป็นผู้ดื่มแอลกอฮอล์อยู่แล้ว สำหรับผู้ชายควรจำกัดปริมาณของแอลกอฮอล์ให้ไม่เกินวันละ 2 หน่วยการดื่ม (เทียบเท่ากับวิสกี้ 90 มิลลิลิตร ไวน์ 300 มิลลิลิตร หรือเบียร์ 720 มิลลิลิตร) ส่วนผู้หญิงและผู้ที่มีน้ำหนักตัวน้อยควรจำกัดปริมาณของการดื่มแอลกอฮอล์ให้ไม่เกินวันละ 1 หน่วยการดื่ม (เทียบเท่ากับวิสกี้ 45 มิลลิลิตร ไวน์ 3150 มิลลิลิตร หรือเบียร์ 360 มิลลิลิตร)",
//       "ปรึกษาแพทย์เกี่ยวกับยาที่ใช้อยู่เพราะอาจมียาบางตัวที่ทำให้เกิดความดันโลหิตสูงได้ ส่วนการใช้ยาคุมกำเนิดแนะนำว่าควรปรึกษาแพทย์",
//       "ผู้ที่มีอายุตั้งแต่ 18 ปีขึ้นไป แม้ว่าจะยังรู้สึกสบายดีก็ควรไปตรวจสุขภาพซึ่งรวมถึงการตรวจวัดความดันโลหิตอย่างน้อยทุก 2 ปี ส่วนผู้ที่มีอายุตั้งแต่ 35 ปีขึ้นไป แนะนำว่าควรไปตรวจวัดความดันโลหิตอย่างน้อยปีละ 1 ครั้ง หรือตรวจบ่อยตามที่แพทย์หรือพยาบาลแนะนำ โดยเฉพาะอย่างยิ่งในผู้ที่มีรูปร่างอ้วนหรือมีพ่อแม่พี่น้องเป็นโรคนี้ (อาจเป็นสถานพยาบาลใกล้บ้านก็ได้ เช่น คลินิกแพทย์ สถานีอนามัย ศูนย์บริการสาธารณสุข)"
// ],
//     'ในรายที่เป็นไม่มาก (ระดับน้ำตาลในเลือดไม่เกิน 200 มก./ดล.) ซึ่งพบได้เป็นส่วนใหญ่ในกลุ่มเบาหวานชนิดที่ 2 ผู้ป่วยจะยังรู้สึกสบายดีและไม่มีอาการผิดปกติใด ๆ และมักตรวจพบได้โดยบังเอิญจากการตรวจปัสสาวะหรือการตรวจเลือดในขณะที่ไปพบแพทย์ด้วยสาเหตุอื่นหรือจากการตรวจสุขภาพทั่วไป',
//     'โรคเบาหวานแต่ละชนิดสามารถป้องกันได้แตกต่างกัน ซึ่งโรคเบาหวานประเภทที่ 1 อาจหาทางป้องกันได้ยากหรือแทบไม่สามารถป้องกันมิให้เกิดโรคได้ (เพราะสาเหตุการเกิดมาจากปัจจัยที่ควบคุมไม่ได้) ในขณะที่โรคเบาหวานประเภทที่ 2 สามารถป้องกันได้ด้วยการปรับเปลี่ยนพฤติกรรมการดำเนินชีวิตให้เหมาะสม (หลักสำคัญในการป้องกันเบาหวานทุกชนิด คือ คอยระวังระดับน้ำตาลในเลือดและคอเลสเตอรอลให้อยู่ในระดับปกติ) ซึ่งสามารถทำได้ตามคำแนะนำต่อไปนี้',
//     [
//       "ปัสสาวะบ่อย",
//       "ระดับน้ำตาลในเลือดสูง",
//       "กระหายน้ำบ่อย",
//       "หิวบ่อย",
//       "กินจุ",
//       "เหนื่อยง่าย",
//       "น้ำหนักตัวเพิ่มขึ้น",
//       "น้ำหนักตัวลดลง",
//       "แผลเรื้อรังที่หายช้า",
//       "ชาปลายมือปลายเท้า",
//       "หย่อนสมรรถภาพทางเพศ",
//       "เจ็บจุกหน้าอก",
//       "สายตามัว",
//       "คลื่นไส้",
//       "แผลเรื้อรัง"
//     ]
//     ),
//  new listdisease(
//      'ความดันโลหิตสูง (Hypertension)',
//      [
//       "พยายามหลีกเลี่ยงสาเหตุหรือปัจจัยเสี่ยง (ที่หลีกเลี่ยงได้) ดังที่กล่าวมา",
//       "ควรปรับพฤติกรรมการรับประทานอาหาร การใช้ชีวิต และปฏิบัติตนตามคำแนะนำในหัวข้อวิธีรักษาโรคกรดไหลย้อน"
// ],
//      'ในรายที่เป็นความดันโลหิตสูงชนิดไม่ทราบสาเหตุ (พบได้เป็นส่วนใหญ่) ส่วนใหญ่จะมีไม่อาการแสดงแต่อย่างใด และมักตรวจพบได้โดยบังเอิญจากการตรวจคัดกรองโรคหรือเมื่อมาพบแพทย์ด้วยปัญหาอื่นที่ไม่เกี่ยวข้อง มีส่วนน้อยที่อาจมีอาการปวดมึนท้ายทอย ตึงที่ต้นคอ เวียนศีรษะ ซึ่งมักจะเป็นตอนตื่นนอนใหม่ ๆ พอตอนสายอาการจะทุเลาไปเอง บางรายอาจมีอาการปวดศีรษะตุบ ๆ แบบไมเกรน ส่วนในรายที่เป็นมานาน ๆ หรือมีความดันโลหิตสูงมาก ๆ อาจจะมีอาการอ่อนเพลีย เหนื่อยง่าย ใจสั่น นอนไม่หลับ ตามัว มือเท้าชา หรือมีเลือดกำเดาไหล หากปล่อยทิ้งไว้นาน ๆ โดยไม่ได้รับการรักษา อาจแสดงอาการของภาวะแทรกซ้อนได้ เช่น หอบเหนื่อบ เจ็บหน้าอก บวม แขนขาเป็นอัมพาต เป็นต้น',
//      'สำหรับคนทั่วไปอาจป้องกันไม่ให้เกิดโรคความดันโลหิตสูงได้โดยการปรับเปลี่ยนพฤติกรรมการใช้ชีวิตดังนี้',
//      [
//       "ปวดมึนท้ายทอย",
//       "ตึงที่ต้นคอ",
//       "เวียนศีรษะ",
//       "ปวดศีรษะ",
//       "อาการอ่อนเพลีย",
//       "เหนื่อยง่าย",
//       "ใจสั่น",
//       "นอนไม่หลับ",
//       "ตามัว",
//       "มือเท้าชา",
//       "เลือดกำเดาไหล",
//       "หอบเหนื่อบ",
//       "เจ็บหน้าอก",
//       "แขนขาบวม",
//       "เหงื่อออกเป็นพัก ๆ",
//       "นอนกรนผิดปกติ",
//       "แขนและขาอ่อนแรง",
//       "ปวดหลัง",
//       "ปัสสาวะขุ่นแดง"
//     ]
//  ),
