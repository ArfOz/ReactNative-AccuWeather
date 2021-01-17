import React ,{useState, useEffect} from "react";
import {Text, SafeAreaView, View, StyleSheet} from "react-native";

import {styles} from "./styles";


const Select = (props) => {
    console.log(props.city)
        
    return(
        <View style={styles.selectContainer}>
                <Text style={styles.selectText}>{props.city?.LocalizedName}</Text>
                <Text style={styles.selectText}>{props.city?.WeatherText}</Text>
                <Text style={styles.selectText}>{props.city.Temperature?.Metric?.Value} Celsius</Text>
        </View>
    )
};

export {Select}



