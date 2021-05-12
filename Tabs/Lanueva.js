import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Lanueva from "../ListaComponentes/ListaNueva"

class Profile extends React.Component {
    render(){
        return(
  <View style={styles.container}>
 <Text style={styles.subtitulo}>Artistas de la Nueva Generacion</Text>
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
      
    },
     busqueda:{
     height: 40,
     margin: 20,
     borderWidth: 1,
     borderRadius: 10,
     padding: 10,
    },
  });
  

export default Profile;