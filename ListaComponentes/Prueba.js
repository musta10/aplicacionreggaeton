import React from "react"
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import playlist from "../listaJson/playlist.json"

const Prueba = () => {
    return(
        <View>
        {playlist.map((anuel, i) =>{
            return(
                <TouchableOpacity key={i} style={styles.mydiv} onPress={() =>{
                    Linking.openURL(anuel.url);
                }}>
                <MaterialCommunityIcons name="music-circle-outline" color={"white"} size={80} />
                <Text style={{color: "#FFFFFF"}}>{anuel.name}</Text>
           </TouchableOpacity>
            )
        })}
       
        </View>
    )
}

const styles = StyleSheet.create({
    mydiv: {
        width: 120,
        height: 120,
        backgroundColor: "#282c34",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,

    }
})

export default Prueba;