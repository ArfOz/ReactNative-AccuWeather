import React ,{useState, useEffect} from "react";
import {Text, SafeAreaView, View, StyleSheet} from "react-native";
import MapView from 'react-native-maps';
import {ImageItem} from "../components/index";

const Select = (props) => {
    const {secilen} = props.route.params;
    
    console.log(secilen.GeoPosition.Longitude)
    console.log(secilen.GeoPosition.Latitude)

    useEffect
        
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>Notifications</Text>
                <Text>City:{secilen.LocalizedName}</Text>
                <Text>Temperature: {secilen.Temperature.Metric.Value}</Text>
                <Text>Weather Conditions: {secilen.WeatherText}</Text>
                <View>
                    <ImageItem item={secilen} />
                </View>
            </View>

                <MapView
                        style={{flex:1}}
                        initialRegion={{
                        latitude: (secilen.GeoPosition.Latitude),
                        longitude: (secilen.GeoPosition.Longitude) ,
                        latitudeDelta: 0.2,
                        longitudeDelta: 0.2,
                    }}
                />
               


            
        </SafeAreaView>
    )
};

export {Select}





const styles = StyleSheet.create({
     
})
