import React,{useEffect, useState} from "react";
import {SafeAreaView, Text, View,Image} from "react-native";
import axios from  "axios";
import {API_KEY} from "@env";
import {styles} from "./styles";
import MapView,{Marker} from 'react-native-maps';
import {Select} from "./Select";
import {iconMarkers} from "../components/iconItem"


const Intro = (props) =>{
  const [veri, SetVeri]  = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const alma =async () =>{
    const {data} = await axios.get("http://dataservice.accuweather.com/currentconditions/v1/topcities/150", {params:{
      apikey: API_KEY
    }}); 
    SetVeri(data);
    console.log(data)
   };
useEffect(()=>{
    alma();
}, []);

const onCitySelect = (city) => {
  setSelectedCity(city);
}


    return(  
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
              <MapView
              mapType="hybrid"
              style={{flex:5}}
              initialRegion={{
                latitude: 41.01105,
                longitude: 28.9578,
                latitudeDelta: 40,
                longitudeDelta: 40,
            }} >
                    {veri.map((city, index) => (
                     <Marker
                      key={index}
                      coordinate={{
                        latitude: city.GeoPosition.Latitude,
                        longitude: city.GeoPosition.Longitude,
                      }}
                      onPress={() => onCitySelect(city)}
                     >
                       <Image source={iconMarkers[city.WeatherIcon]} />
                     </Marker>
                    ))}
              </MapView>
              <Select
              city={selectedCity}
  
          />
            </View>
        </SafeAreaView>
  )
};

export {Intro};
