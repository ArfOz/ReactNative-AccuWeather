import React from 'react';
import {Image, View,SafeAreaView} from "react-native"

const ImageItem = ({item}) => {
    console.log(item.WeatherIcon)
    const adress = `"../assets/${item.WeatherIcon}-s.png"`
    console.log(adress)


    return (
       <View>
         {(() => {
  
    switch (item.WeatherIcon) {
        case 1:
          return (
              <Image source={require('../assets/1-s.png')} />
        )
        case 2:
          return (
            <Image source={require('../assets/2.png')} />
        )
        case 3:
          return (
            <Image source={require('../assets/3-s.png')} />
        )
        case 4:
          return (
            <Image source={require('../assets/4-s.png')} />
        )
        case 5:
          return (
            <Image source={require('../assets/5-s.png')} />
        )
         case 6:
          return (
            <Image source={require('../assets/6-s.png')} />
        )
        case 7:
          return (
            <Image source={require('../assets/7-s.png')} />
        )
        case 8:
          return (
            <Image source={require('../assets/8-s.png')} />
        )
        case 11:
          return (
            <Image source={require('../assets/11-s.png')} />
        )
        case 12:
          return (
            <Image source={require('../assets/12-s.png')} />
        )
        case 13:
          return (
              <Image source={require('../assets/13-s.png')} />
        )
        case 14:
          return (
              <Image source={require('../assets/14-s.png')} />
        )
        case 15:
          return (
              <Image source={require('../assets/15-s.png')} />
        )
        case 16:
          return (
              <Image source={require('../assets/16-s.png')} />
        )
        case 17:
          return (
              <Image source={require('../assets/17-s.png')} />
        )
        case 18:
            return (
              <Image source={require('../assets/18-s.png')} />
          )
        case 19:
            return (
              <Image source={require('../assets/19-s.png')} />
          )
        case 20:
            return (
              <Image source={require('../assets/20-s.png')} />
          )
        case 21:
            return (
                <Image source={require('../assets/21-s.png')} />
          )
        case 22:
            return (
                <Image source={require('../assets/22-s.png')} />
          )
        case 23:
            return (
                <Image source={require('../assets/23-s.png')} />
          )
        case 25:
            return (
                <Image source={require('../assets/25-s.png')} />
          )
        case 26:
            return (
                <Image source={require('../assets/26-s.png')} />
          )
        case 29:
            return (
                <Image source={require('../assets/29-s.png')} />
          )
        case 30:
            return (
                <Image source={require('../assets/30-s.png')} />
          )
        case 31:
            return (
                <Image source={require('../assets/31-s.png')} />
          )
        case 32:
            return (
                <Image source={require('../assets/32-s.png')} />
          )
        case 33:
            return (
                <Image source={require('../assets/33-s.png')} />
          )
        case 34:
            return (
                <Image source={require('../assets/34-s.png')} />
          )
        case 35:
            return (
                <Image source={require('../assets/35-s.png')} />
          )
        case 36:
            return (
                <Image source={require('../assets/36-s.png')} />
          )
        case 37:
            return (
                <Image source={require('../assets/37-s.png')} />
          )
        case 38:
            return (
                <Image source={require('../assets/38-s.png')} />
          )
        case 39:
            return (
                <Image source={require('../assets/39-s.png')} />
          )
        case 40:
            return (
                <Image source={require('../assets/40-s.png')} />
          )
        case 41:
            return (
                <Image source={require('../assets/41-s.png')} />
          )
        case 42:
            return (
                <Image source={require('../assets/42-s.png')} />
          )
        case 43:
            return (
                <Image source={require('../assets/43-s.png')} />
          )
        case 44:
            return (
                <Image source={require('../assets/44-s.png')} />
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
