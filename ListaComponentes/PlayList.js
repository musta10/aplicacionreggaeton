import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


class Playlist extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text style={styles.subtitulo}>Playlist de el verdadero AnuelAA</Text>
      <StatusBar style="auto" />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 0.4,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#FFFFFF",
      backgroundColor: '#282c34',
    }, subtitulo :{
      textAlign: 'center',
      margin: 20,
      
    }
  });
  

export default Playlist;