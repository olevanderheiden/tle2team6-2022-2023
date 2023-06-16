import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import React, { UseState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function FrontpageButton({ destination }) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      underlayColor="#eaeaea"
      style={styles.button}
      onPressOut={() => navigation.navigate(destination)}
    >
      <Text style={styles.buttonText}>{destination} </Text>
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
