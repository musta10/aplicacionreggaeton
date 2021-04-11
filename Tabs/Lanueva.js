import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lanueva from "../ListaComponentes/ListaNueva"

class Profile extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text style={styles.subtitulo}>27 artistas la nueva generación</Text>
      <StatusBar style="auto" />
      <Lanueva />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    }, subtitulo :{
      textAlign: 'center',
      margin: 20,
      color: "#796e6e",
      
    }
  });
  

export default Profile;