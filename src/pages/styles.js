import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
     container:{
        margin:10,
        flex:5,
        
     },
     header:{
        paddingBottom:15,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20
        
     },
     cities:{
       
        alignSelf: 'center',
        paddingVertical:3,
        backgroundColor:"gray",
        borderRadius:15,
        minWidth:100,
        textAlign:"center",
        margin:5
     },

     
selectContainer:{
   justifyContent: "flex-end", 
   margin: 10, 
   marginHorizontal: 10,
   backgroundColor:"yellow",
   
   fontWeight:"bold"
},
selectText:{
   fontFamily:"Orbitron-Bold",
   fontSize:20,
}

})
