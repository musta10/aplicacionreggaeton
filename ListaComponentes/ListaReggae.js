import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Reggeaton = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/DaddyYankee");
        }}>
         <MaterialCommunityIcons name="music-note-eighth" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>daddy yankee</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/AnuelAA");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>Anuel aa</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://www.youtube.com/c/BadBunnyPR");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>bad bunny</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://www.youtube.com/c/BadBunnyPR");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>bad bunny</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://www.youtube.com/c/BadBunnyPR");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>bad bunny</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://www.youtube.com/c/BadBunnyPR");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}>bad bunny</Text>
        </TouchableOpacity>
      </View>
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