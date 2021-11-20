import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function HospitalmapScreens() {
  baseURL =
    'https://data.go.th/dataset/296f32c6-8c7e-4a54-ade0-0913d35d3168/resource/d132638d-a243-4829-aed8-10ed4fad917f/download/priv_hos.json';
  const [info, setInfo] = useState([]);

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
  }, []);

  console.log(info);

  // constructor(props) {
  //   super(props);
  //   this.state = {};

  // }

  // render() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 13.623087059997333,
          longitude: 100.434088091312154,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
            coordinate={{
              latitude: 13.623087059997333,
              longitude: 100.434088091312154,
            }}
            title={'google'}></Marker> */}

        {/* {info.features.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.geometry.coordinates[0],
              longitude: item.geometry.coordinates[1],
            }}
          />
        ))} */}
      </MapView>
      {/* {info.map((item) => (
      <View><Text>{item}</Text></View>
      ))} */}
     
    </View>
  );
  // }
}
