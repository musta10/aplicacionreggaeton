import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListaTrap = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>Test link</Text>

        </View>

        <MaterialCommunityIcons name="crown" color={"black"} size={30} />
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL("https://youtube.com/c/MykeTowers");
          }}
        >
          Myke Towers
        </Text>
        
      </View>
    </SafeAreaView>
  );
};

export default ListaTrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20
  },
  artistalist:{
    borderWidth: 2,
    borderColor: "#FFD321",
    alignItems: "center",
    height: 60,
    justifyContent: "center",
    borderRadius: 35
  },
  hyperlinkStyle: {
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2
  },
});
