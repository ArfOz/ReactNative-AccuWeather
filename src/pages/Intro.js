import React,{useEffect, useState} from "react";
import {SafeAreaView, Text, View,TouchableOpacity,FlatList} from "react-native";
import axios from  "axios";
import {API_KEY} from "@env";


const Intro = (props) =>{
  const [veri, SetVeri]  = useState([]);

  const alma =async () =>{
    const {data} = await axios.get("http://dataservice.accuweather.com/currentconditions/v1/topcities/50", {params:{
      apikey: API_KEY
    }}
    );
      
    SetVeri(data);
    console.log(data)
   };

useEffect(()=>{
    alma();
}, []);

  const renderCities = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Select', { secilen: item })}>
           <Text>{item.LocalizedName}</Text>
        </TouchableOpacity>
    
    )
}
  
    return(
      
        <SafeAreaView >
            <View>
              <Text >SELECT A CITY</Text>
              <FlatList 
            keyExtractor={(_, index) => index.toString()}
            data={veri}
            renderItem={renderCities}
            />
           
        
            </View>
            
        </SafeAreaView>
    
    )
};

export {Intro}