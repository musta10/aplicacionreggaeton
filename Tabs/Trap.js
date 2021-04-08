import React, {useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';
import ListaArtistas from "../ListaComponentes/ListaTrap"



const Trap = () => {
  return(
    <View style={styles.container}>
      <View style={styles.textos}>
      <Text style={styles.titulo}>Quien es el Rey del Trap ?</Text>
      <Text style={styles.subtitulo}>21 artistas cantan Trap</Text>
      </View>
        <StatusBar style="auto" />
        <ListaArtistas />
      </View>
          )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textos:{
      margin: 20,
      
    },
    titulo: {
      fontSize: 20,
      color: "#000000",
      
      fontWeight: "bold",
      textAlign: 'center',
    },
    subtitulo: {
      color: "#796e6e",
      textAlign: 'center',
    },

  });
  

export default Trap;