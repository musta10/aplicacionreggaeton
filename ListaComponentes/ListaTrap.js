import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import trapjson from "../listaJson/artistasTrap.json"

const ListaTrap = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", flexDirection: "row"}}>
      <ScrollView>
      <View style={styles.container}>
        {trapjson.map((artista, key) => {
          return (
            <TouchableOpacity key={key} onPress={() =>{
              Linking.openURL(artista.url);
             }}>
               <View style={styles.artistalist}>
              <MaterialCommunityIcons name="crown" color={"black"} size={30} />
              <Text style={styles.hyperlinkStyle}> {artista.name} </Text>
              </View>
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

export default ListaTrap;