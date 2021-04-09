import React, { useState, useCallback, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert, SafeAreaView, ScrollView, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";




const Top5 = () => {
  const [playing, setPlaying] = useState(false);

  const videos = [
    {topMusic: "Fklvhaj7drg"},
    {topMusic: "37tmRDUK0FM"},
    {topMusic: "GZCIchMq8Wo"},
    {topMusic: "0Q5J38bpunI"},
    {topMusic: "M-N8zr7_UWM"}
  
  ]

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video Terminado mira otro!");
    }
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.tiutloTop}>
        <Text style={styles.textoTop}>El Top 5 en Islas Canarias</Text>
        <MaterialCommunityIcons name="music" color={'#FFFFFF'} size={38} />
        <StatusBar style="auto" />
        </View>
        <SafeAreaView style={styles.areaview}>
          <ScrollView style={styles.scrol}>
            {videos.map((video, i) =>{
              return(
                <YoutubePlayer key={i}
                height={200}
                play={playing}
                videoId={video.topMusic}
                onChangeState={onStateChange}
              />
              )
            })}
          </ScrollView>
        </SafeAreaView>
        </View>
          )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFD321',
    },
    tiutloTop: {
      height: 60,
      alignItems: 'center',
      marginTop: 10,
      flexDirection: "row",
      justifyContent: 'space-around',
    },
    areaview: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,

    },
    scrol: {
      backgroundColor: '#FFD321',
      marginHorizontal: 20,
    },
    textoTop: {
      fontSize: 20,
     fontWeight: 'bold'
    },
  });
  

export default Top5;