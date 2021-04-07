import React, { useState, useCallback, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert,SafeAreaView, ScrollView, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";

const Top5 = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video Terminado mira otro!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.tiutloTop}>
        <Text style={styles.textoTop}>El Top 5 en Islas Canarias</Text>
        <MaterialCommunityIcons name="music" color={'#FFFFFF'} size={38} />
        <StatusBar style="auto" />
        </View>
    <YoutubePlayer
        height={200}
        play={playing}
        videoId={"Fklvhaj7drg"}
        onChangeState={onStateChange}
      />
    <YoutubePlayer
        height={200}
        play={playing}
        videoId={"37tmRDUK0FM"}
        onChangeState={onStateChange}
      />
          <YoutubePlayer
        height={200}
        play={playing}
        videoId={"URdNstAiuaE"}
        onChangeState={onStateChange}
      />
                <YoutubePlayer
        height={200}
        play={playing}
        videoId={"0Q5J38bpunI"}
        onChangeState={onStateChange}
      />
                <YoutubePlayer
        height={200}
        play={playing}
        videoId={"CMvW-1a8ytI"}
        onChangeState={onStateChange}
      />
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
    textoTop: {
      fontSize: 20,
     fontWeight: 'bold'
    },
  });
  

export default Top5;