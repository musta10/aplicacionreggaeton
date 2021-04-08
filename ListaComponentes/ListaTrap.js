import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import trap from "../listaJson/artistasTrap.json"


const ListaTrap = () => {
    const [trap, setTrap] = useState(trap)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity  style={styles.artistalist} onPress={() =>{
         Linking.openURL("https://youtube.com/c/MykeTowers");
        }}>
         <MaterialCommunityIcons name="crown" color={"black"} size={30} />
         <Text style={styles.hyperlinkStyle}> Myke Towers</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


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
    height: 65,
    justifyContent: "center",
    borderRadius: 35
  },
  hyperlinkStyle: {
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

export default ListaTrap;