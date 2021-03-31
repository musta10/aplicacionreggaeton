import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/palmlogo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.palmera} />
      <View>
        <Text style={styles.headerText}>TrapCanarias</Text>
      </View>
      <View>
        <Text style={styles.headerTitle}>Musica Trap y Drill</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    // backgroundColor: "#F9CB0C"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerTitle: {
    color: "#796e6e"
  },
  palmera: {
    width: 40,
    height: 40,
    // position: "absolute",
    // left: 16,
  },
});
export default Header;