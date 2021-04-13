import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking, TouchableNativeFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import trapjson from "../listaJson/artistasTrap.json"

const ListaTrap = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", flexDirection: "row"}}>
      <ScrollView>
      <View style={styles.container}>
        {trapjson.map((artista, key) => {
          return (
            <TouchableNativeFeedback key={key} onPress={() =>{
              Linking.openURL(artista.url);
              setRippleColor(randomHexColor());
          setRippleOverflow(!rippleOverflow);
             }}background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
             >
               <View style={styles.artistalist}>
              <MaterialCommunityIcons name="crown" color={"black"} size={30} />
              <Text style={styles.hyperlinkStyle}> {artista.name} </Text>
              </View>
             </TouchableNativeFeedback>
     
          )
        })}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const randomHexColor = () => {
  return "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });
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
    height: 70,
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