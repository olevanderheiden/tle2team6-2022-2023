import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React, { UseState } from "react";
import { useNavigation } from "@react-navigation/native";
import FrontpageSvg from "../assets/frontpage_svg";
export default function FrontpageButton({ destination }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor="#eaeaea"
      style={styles.button}
      onPressOut={() => [navigation.navigate(destination)]}
    >
      <FrontpageSvg svg={destination} />
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  buttonText: {
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
