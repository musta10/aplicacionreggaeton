import React, { useState, useCallback, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert, SafeAreaView, ScrollView, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";
import Playlist from "../ListaComponentes/Playlist"
import OmegaList from "../ListaComponentes/Playomega";
import Perreolista from "../ListaComponentes/Playperreo";





const Top5 = () => {
  const [playing, setPlaying] = useState(false);

  const videos = [
    {topMusic: "37tmRDUK0FM"},
    {topMusic: "LDG9sggZHQY"},
    {topMusic: "Tpv5ibeHdcE"},
    {topMusic: "GZCIchMq8Wo"},
    {topMusic: "n52a2hpZJBo"}
  ]

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video Terminado mira otro!");
    }
  }, []);

  return(
    <>
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
        <SafeAreaView style={{flex: 1, backgroundColor:"#FFD321"}} >
          <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.titulolist}>Playlist de Omega</Text>
        </View>
        <View style={styles.playlist}>
          <View style={styles.positiondiv}>
            <OmegaList />
          </View>
        </View>
        <View>
        <Text style={styles.titulolist}>Playlist de el verdadero AnuelAA</Text>
        </View>
        <View style={styles.playlist}>
          <View style={styles.positiondiv}>
           <Playlist />  
          </View>
        </View>
        <View>
        <Text style={styles.titulolist}>Playlist de los clasicos</Text>
        </View>
        <View style={styles.playlist}>
          <View style={styles.positiondiv}>
            <Perreolista />
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
        </>
          )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
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
      fontSize: 16,
     fontWeight: 'bold'
    },
    playlist: {
      flex: 1,
      // backgroundColor: "#FFD321",
      backgroundColor: '#FFD321',
     
    },
    positiondiv:{
      marginTop: 5,
      paddingHorizontal: 20,
    },
    titulolist :{
      width: "90%",
      textAlign: "center",
      color: "white",
      backgroundColor: "#000000",
      fontSize: 16,
      marginTop: 10,
      padding: 5,
      marginHorizontal: 20,
      borderRadius: 10,
    }
  });
  

export default Top5;