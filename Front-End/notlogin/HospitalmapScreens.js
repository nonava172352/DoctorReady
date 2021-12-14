import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function HospitalmapScreens(){
  baseURL = 'https://www.emergency.wa.gov.au/data/incident_FCAD.json';
  const [info, setInfo] = useState([]);

  
  // const [current, setCurrent] = useState(0)
  //   Geolocation.getCurrentPosition(data=>{
  //     console.log(data)
  //   })

  const [current, setCurrent] = useState(null);

  // console.log(current.coords.latitude)

    
  // const [locate, setLocate] = useState({
  //   latitude: 0,
  //   longitude: 0
  // })
  // axios({
  //   method: 'get',
  //   url: 'https://data.go.th/dataset/296f32c6-8c7e-4a54-ade0-0913d35d3168/resource/d132638d-a243-4829-aed8-10ed4fad917f/download/priv_hos.json',
  // }).then((response) => {
  //   setInfo(response.data)
  // });

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setInfo(response.data.features)
    });

  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //         // console.log(position.coords);
  //         setCurrent(position)
  //     },
  //     (error) => {
  //         // See error code charts below.
  //         console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  // );
  }, []);


    

  

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((posittion) => {
  //     const newPos = {
  //       latitude: posittion.coords.latitude,
  //       longitude: posittion.coords.longitude,
  //     };
  //     setLocate(newPos)
  //   }, (err) => {console.log(err)},options);
  // }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = {};

  // }

  // console.log(info[0])
  // render() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 13.646105758077482,
          longitude: 100.43842155407962,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          <MapView.Marker
            coordinate={{
              latitude: 13.646105758077482, 
              longitude: 100.43842155407962,
            }}
            title={'google'}>
              <Image source={{uri:'https://iconarchive.com/download/i85581/graphicloads/100-flat/home.ico'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
        <MapView.Marker
            coordinate={{
              latitude: 13.648220660953447, 
              longitude: 100.42102633966263,
            }}
            title={'google'}
            >
            <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
        <MapView.Marker
            coordinate={{
              latitude: 13.627534802620785, 
              longitude: 100.41776477342107,
            }}
            title={'google'}>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
         <MapView.Marker
            coordinate={{
              latitude: 13.661705862656046,
              longitude: 100.43413348459167,
            }}
            title={'google'}>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
            <MapView.Marker
            coordinate={{
              latitude: 13.6344136911256, 
              longitude:  100.43339296458772
            }}
            title={'google'}>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
            <MapView.Marker
            coordinate={{
              latitude: 13.659836186969748,
              longitude:  100.4457474743908
            }}
            title={'google'}>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>
            <MapView.Marker
            coordinate={{
              latitude: 13.63737512556711, 
              longitude:  100.42947349524309
            }}
            title={'google'}>
              <Image source={{uri:'https://image.flaticon.com/icons/png/512/504/504276.png'}} style={{height: 35, width:35 }} />
            </MapView.Marker>

        {/* {info.map((item, index) => <Marker
            key={index}
            coordinate={{
              latitude: item.geometry.coordinates[1],
              longitude: item.geometry.coordinates[0],
            }}
          />)} */}
      </MapView>
    </View>
  );
  }
// }
