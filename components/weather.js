import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {haze,rainy,snow,sunny} from "./image.js"
import Searchbar from './searchbar.js'
import { StatusBar } from 'expo-status-bar'

export default function Weather({Data,fetchWeatherData}) {
    const [Backgroundimage, setBackgroundimage] = useState()
    const {weather,
    name,main:{temp,humidity,temp_min,temp_max},wind:{speed}} = Data
    const [{main}] = weather
    useEffect(()=>{setBackgroundimage(bgimage(main))},[Data])
    function bgimage(weather){
        if(weather=="Snow") return snow
        if(weather=="Rain") return rainy
        if(weather=="Clear") return sunny
        if(weather=="Haze") return haze
        return haze
    }


  let textColor = Backgroundimage !== sunny ? 'white' : 'black'
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='darkgrey'/>
      <ImageBackground source={Backgroundimage}
      resizeMode="cover" style={styles.img} >
        <Searchbar fetchWeatherData={fetchWeatherData}/>
      <View style={{alignItems:'center',alignSelf:'center'}}>
          <Text style={{...styles.header,color:textColor,fontWeight:'bold'}}>{name}</Text>
          <Text style={{...styles.header,color:textColor,}}> {main}</Text>
          <Text style={{...styles.header,color:textColor,fontSize:28}}> Current Temp - {temp}°C</Text>
          <Text style={{...styles.header,fontSize:20,
      width:Dimensions.get("screen").width-15,color:textColor,
      backgroundColor:"rgba(0,0,0,0.5)",
      padding:10,
      borderRadius:15,
      justifyContent:'center'}}> Temprature Range - {temp_max}°C to {temp_min}°C</Text>
      </View>
      <View style={styles.extrainfo}>
      <View style={styles.info}>
      <Text style={{fontSize:22,color:"white"}}>Humidity </Text>
      <Text style={{fontSize:22,color:"white"}}>{humidity} % </Text>

      </View>
      <View style={styles.info}>
      <Text style={{fontSize:22,color:"white"}}> Wind Speed</Text>
      <Text style={{fontSize:22,color:"white"}}> {speed} m/s </Text>

      </View>
      </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    img:{
        flex:1,
        width:Dimensions.get('screen').width,
        height:Dimensions.get("screen").height
        
    },
    header:{
      fontSize:34,
      marginTop:30,
      
    },
    extrainfo:{
      flexDirection:"row",
      marginTop:10,
      justifyContent:"space-between",
      padding:10
    },
    info:{
      marginLeft:10,
      marginRight:10,
      width:Dimensions.get("screen").width/2.5,
      backgroundColor:"rgba(0,0,0,0.5)",
      padding:10,
      borderRadius:15,
      justifyContent:'center'

    }
  });