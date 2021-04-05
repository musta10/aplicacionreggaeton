import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Profile extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text>Screen artistas La nueva generación</Text>
      <StatusBar style="auto" />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Profile;