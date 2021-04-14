import React from "react"
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import listaomega from "../listaJson/omega.json"

const OmegaList = () => {
    return(
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {listaomega.map((omega, i) =>{
            return(
                <TouchableOpacity key={i} style={styles.mydiv} onPress={() =>{
                    Linking.openURL(omega.url);
                }}>
                <MaterialCommunityIcons name="music-circle-outline" color={"black"} size={60} />
                <Text style={{color: "#000000"}}>{omega.name}</Text>
           </TouchableOpacity>
            )
        })}
       </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mydiv: {
        width: 110,
        height: 110,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,

    }
})

export default OmegaList;