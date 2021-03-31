import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Trap extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text>Pagina artistas Trap</Text>
      <StatusBar style="auto" />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Trap;