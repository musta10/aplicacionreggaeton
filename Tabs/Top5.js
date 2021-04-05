import React, {useCallback }from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const supportedURL = "https://youtube.com/c/MykeTowers";


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

class Top5 extends React.Component {
    render(){
        return(
  <View style={styles.container}>
    <View style={styles.tiutloTop}>
      <Text style={styles.textoTop}>El Top 5 en Islas Canarias</Text>
      <MaterialCommunityIcons name="music" color={'#FFFFFF'} size={38} />
      <StatusBar style="auto" />
      </View>
      <OpenURLButton url={supportedURL}>Myke Towers</OpenURLButton>
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
      fontSize: 18,
      color: "#000"
    }
  });
  

export default Top5;