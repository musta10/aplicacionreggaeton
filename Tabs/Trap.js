import React, {useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';


const mykeTowers = "https://youtube.com/c/MykeTowers";


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



const Trap = () => {
  return(
    <View style={styles.container}>
        <Text>Pagina artistas Trap</Text>
        <StatusBar style="auto" />
        <OpenURLButton url={mykeTowers}>
         Myke Towers
         </OpenURLButton>
      </View>
       
          )
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