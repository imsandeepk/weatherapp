import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Weather from './components/weather';
import Searchbar from './components/searchbar';




export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);
    
  async function fetchWeatherData(cityName){
    setLoaded(false)
    const API_KEY = "3ea96ab4a6be7b3c1f1a16703f014836"
    const API= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric `
    try {
      const response = await fetch(API);
      if(response.status == 200) {
          const data = await response.json();
          setWeatherData(data);
      } else {
          setWeatherData(null);
      }
      setLoaded(true);
      
  } catch (error) {
      console.log(error);
  }
}

useEffect(() => {
  fetchWeatherData("delhi")
  console.log(weatherData)
}, [])


  if (!loaded){ return(
    <View style={styles.container}>
      <ActivityIndicator color="grey" size={36}/>
    </View>
  )
    
    
  } else if (weatherData==null){
    return(
      <View>
        <Searchbar fetchWeatherData={fetchWeatherData} />
        <Text style={styles.text}>City not found! try different City</Text>
      </View>
    )

    
  }



  return (
    <View style={styles.container}>
      <Weather Data={weatherData} fetchWeatherData={fetchWeatherData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    margin:20,
    fontSize:28,
    fontFamily:"sans-serif"
  }
});
