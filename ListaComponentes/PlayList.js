import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Playlist extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text style={styles.subtitulo}>Playlist de el verdadero AnuelAA</Text>
     
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#000",
      backgroundColor: '#FFFF',
    }
    
  });
  

export default Playlist;