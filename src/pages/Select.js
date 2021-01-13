
import React ,{useState, useEffect} from "react";
import {Text, SafeAreaView, View,TouchableOpacity, Image} from "react-native";

const Select = (props) => {
    const {secilen} = props.route.params;
    console.log("arif")
    console.log(secilen)
    
    
        
     
    return(
        <SafeAreaView>
            <View>
                <Text>Notifications</Text>
                <Text>City:{secilen.LocalizedName}</Text>
                <Text>Temperature: {secilen.Temperature.Metric.Value}</Text>
                <Text>Weather Conditions: {secilen.WeatherText}</Text>
                <View>

                {(() => {
  
                    switch (secilen.WeatherText) {
                        case "Mostly cloudy":
                             return (
                                <Image source={require('../assets/mostlyCloudy.png')} />
                            )
                        case "Partly cloudy":
                            return (
                                <Image source={require('../assets/cloudy.png')} />
                            )
                        case "Hazy sunshine":
                            return (
                                <Image source={require('../assets/hazySunshine.png')} />
                            )
                        case "Clouds and sun":
                            return (
                                <Image source={require('../assets/sunandClouds.png')} />
                            )
                        case "Cloudy":
                            return (
                                <Image source={require('../assets/cloudy.png')} />
                            )
                        case "Snow":
                            return (
                                <Image source={require('../assets/snow.png')} />
                            )
                        case "Mostly clear":
                            return (
                                <Image source={require('../assets/sunny.png')} />
                            )
                        case "Drizzle":
                            return (
                                <Image source={require('../assets/drizzle.png')} />
                            )
                        case "Foggy":
                            return (
                                <Image source={require('../assets/foggy.png')} />
                            )
                        case "Some clouds":
                            return (
                                <Image source={require('../assets/cloudy.png')} />
                            )
                        case "Mostly Sunny":
                            return (
                                <Image source={require('../assets/sunny.png')} />
                            )
                        case "Clear":
                            return (
                                <Image source={require('../assets/clear.png')} />
                            )
                        case "Overcast":
                            return (
                                <Image source={require('../assets/overcast.png')} />
                            )
                        case "A shower":
                            return (
                               <Image source={require('../assets/aShower.png')} />
                            )
                        case "Light snow":
                            return (
                                <Image source={require('../assets/snow.png')} />
                            )
                        case "Rain":
                            return (
                                <Image source={require('../assets/rain.png')} />
                            )
                        default:
                            return (                      
                                <Image source={require('../assets/noImage.png')} />
                             )
                    }

                })()}
                 
                </View>


            </View>
        </SafeAreaView>
    )
};

export {Select}