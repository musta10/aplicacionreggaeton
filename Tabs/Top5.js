import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class Top5 extends React.Component {
    render(){
        return(
  <View style={styles.container}>
    <View style={styles.tiutloTop}>
      <Text style={styles.textoTop}>El Top 5 en Islas Canarias</Text>
      <MaterialCommunityIcons name="music" color={'#FFFFFF'} size={38} />
      <StatusBar style="auto" />
      </View>
    </View>
        )
    }
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
    }
  });
  

export default Top5;