import React from 'react';
import {Image, View,SafeAreaView} from "react-native"

const ImageItem = ({item}) => {
    console.log(item.WeatherText)
    return (
        <View>
           {(() => {
  
    switch (item.WeatherText) {
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
        case "Sunny":
            return (
                <Image source={require('../assets/sunny.png')} />
          )
        case "Partly sunny":
            return (
                <Image source={require('../assets/sunny.png')} />
          )
        default:
            return (                      
              <Image source={require('../assets/noImage.png')} />
           )
  }

})()}

        </View>
    )
}

export {ImageItem};
