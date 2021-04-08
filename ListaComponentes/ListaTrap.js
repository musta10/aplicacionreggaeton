import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import trap from "../listaJson/artistasTrap.json"


const ListaTrap = () => {
    const [trap, setTrap] = useState(trap)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
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
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
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

export default ListaTrap;