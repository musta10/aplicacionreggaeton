import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Notifications extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text style={styles.subtitulo}>33 artistas cantan Reggaeton</Text>
      <StatusBar style="auto" />
      
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