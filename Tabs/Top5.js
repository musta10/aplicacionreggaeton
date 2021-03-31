import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Top5 extends React.Component {
    render(){
        return(
  <View style={styles.container}>
      <Text>el top 5 en canarias</Text>
      <StatusBar style="auto" />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFD321',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Top5;