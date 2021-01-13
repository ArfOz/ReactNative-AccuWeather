
import React ,{useState, useEffect} from "react";
import {Text, SafeAreaView, View,TouchableOpacity} from "react-native";

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
                {/* switch ({secilen.WeatherText}) {
                    case "Mostly cloudy":
                        
                        break;
                
                    default:
                        break;
                } */}


            </View>
        </SafeAreaView>
    )
};

export {Select}