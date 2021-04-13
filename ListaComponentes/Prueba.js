import React from "react"
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import playlist from "../listaJson/playlist.json"

const Prueba = () => {
    return(
        <TouchableOpacity style={styles.mydiv}>
             <MaterialCommunityIcons name="music-circle-outline" color={"white"} size={80} />
             <Text style={{color: "#FFFFFF"}}>1. AnuelTrap</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mydiv: {
        width: 120,
        height: 120,
        backgroundColor: "#282c34",
        justifyContent: "center",
        alignItems: "center"

    }
})

export default Prueba;