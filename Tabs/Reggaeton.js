import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Notifications extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text>Screen artistas Reggaeton</Text>
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
  

export default Notifications;