import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reggaetonjson from "../listaJson/artistasReggaeton.json"

const Reggeaton = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
        {reggaetonjson.map((artistas, i) => {
          return(
            <TouchableOpacity key={i} style={styles.artistalist} onPress={() =>{
              Linking.openURL(artistas.url);
             }}>
              <MaterialCommunityIcons name="music-note-eighth" color={"black"} size={30} />
              <Text style={styles.hyperlinkStyle}> {artistas.name} </Text>
             </TouchableOpacity>
          )
        })}
       
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingHorizontal: 20
  },
  artistalist:{
    // borderWidth: 2,
    // borderColor: "#FFD321",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    alignItems: "center",
    height: 60,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 35
  },
  hyperlinkStyle: {
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
    paddingLeft: 5
  },
});

export default Reggeaton;