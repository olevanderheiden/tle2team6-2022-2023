import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FrontpageSvg from "../assets/frontpage_svg";
export default function FrontpageButton({ destination, cleanText, logout }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor="#eaeaea"
      style={styles.button}
      onPressOut={destination != "LogOut" ? (() => [navigation.navigate(destination)]) : (logout)}
    >
      <View>
        <FrontpageSvg svg={destination} />
        <Text style={styles.text}>{cleanText}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    color: "#629ade",
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    aspectRatio: 1 / 1,
    width: "50%",
    height: 0,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightcolor: "gray",
    borderRightWidth: StyleSheet.hairlineWidth,
  },
});
