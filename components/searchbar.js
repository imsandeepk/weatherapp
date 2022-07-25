
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, {useState} from 'react'

export default function Searchbar({fetchWeatherData}) {
  const [cityname, setcityname] = useState()
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter the city name to search'
      onChangeText={(text)=> setcityname(text)}
      value={cityname} style={styles.text}></TextInput>
      <Feather name="search" size={24} color="black" onPress={()=>fetchWeatherData(cityname)} />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop:35,
      height:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-between",
      width:Dimensions.get("screen").width-20,
      borderWidth:1.5,
      borderRadius:10,
      marginHorizontal:8,
      backgroundColor:'lightgrey',
      borderColor:"black",
      paddingHorizontal:10
      
    },
    text:{
    fontSize:16

    }
  });