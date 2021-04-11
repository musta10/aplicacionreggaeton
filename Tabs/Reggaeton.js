import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaArtistas from "../ListaComponentes/ListaReggae";

class Notifications extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text style={styles.subtitulo}>34 artistas cantan Reggaeton</Text>
      <StatusBar style="auto" />
      <ListaArtistas />
    </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subtitulo: {
      margin: 20,
      textAlign: 'center',
      color: "#796e6e",
    }
  });
  

export default Notifications;