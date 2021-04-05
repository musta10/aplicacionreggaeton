import React, {useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';




const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


const mykeTowers = "https://youtube.com/c/MykeTowers";


const Trap = () => {
  return(
    <>
    <View style={styles.container}>
      <View style={styles.textos}>
      <Text style={styles.titulo}>Quien es el Rey del Trap ?</Text>
      <Text style={styles.subtitulo}>21 artistas cantan Trap</Text>
      </View>
        <StatusBar style="auto" />
        <View>
          <OpenURLButton url={mykeTowers}>
        Myke Towers
        </OpenURLButton></View>
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
      textAlign: 'center',
    },
    titulo: {
      fontSize: 20,
      fontWeight: "bold"
    },
    subtitulo: {
      color: "#796e6e"
    },

  });
  

export default Trap;