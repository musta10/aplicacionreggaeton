import React, {useState} from "react";
import { SafeAreaView, View, StyleSheet, Text, Linking,TouchableNativeFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reggaetonjson from "../listaJson/artistasReggaeton.json"

const Reggeaton = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
        {reggaetonjson.map((artistas, key) => {
          return(
            <TouchableNativeFeedback key={key} onPress={() =>{
              Linking.openURL(artistas.url);
              setRippleColor(randomHexColor());
              setRippleOverflow(!rippleOverflow);
             }}
             background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
             >
               <View style={styles.artistalist}>
              <MaterialCommunityIcons name="music-note-eighth" color={"black"} size={30} />
              <Text style={styles.hyperlinkStyle}> {artistas.name} </Text>
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
    backgroundColor: "white",
    // paddingHorizontal: 20
  },
  artistalist:{
    // borderWidth: 2,
    // borderColor: "#FFD321",
    borderWidth: 1,
    borderColor: "#000000",
    alignItems: "center",
    height: 60,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5
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