import React, {useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, StyleSheet, Text, View, TextInput } from 'react-native';
import ListaArtistas from "../ListaComponentes/ListaTrap"




const Trap = () => {
  return(
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.textos}>
      <Text style={styles.titulo}>Quien es el Rey del Trap ?</Text>
      </View>
        <ListaArtistas />
      </View>
      </>
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
    // busqueda:{
    //  height: 40,
    //  margin: 20,
    //  borderWidth: 1,
    //  borderRadius: 10,
    //  padding: 10,
    // },
    titulo: {
      fontSize: 16,
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