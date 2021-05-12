import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import ListaArtistas from "../ListaComponentes/ListaReggae";

class Notifications extends React.Component {
    render(){
        return(
  <View style={styles.container}>
    <Text style={styles.subtitulo}>Artistas de Reggeaton</Text>
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
    },
    //  busqueda:{
    //  height: 40,
    //  margin: 20,
    //  borderWidth: 1,
    //  borderRadius: 10,
    //  padding: 10,
    // },
  });
  

export default Notifications;