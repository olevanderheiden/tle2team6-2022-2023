import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";
import Listpage from "./listpage";
import Header from "./header";
import { useNavigation } from "@react-navigation/native";

export default function FrontpageButton({ destination }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => [
        console.log(destination),
        navigation.navigate(destination),
      ]}
    >
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText}>{destination} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "50%",
  },
  buttonText: {
    backgroundColor: "red",
    width: "100%",
    aspectRatio: "1/1",
    color: "#629ade",
    fontSize: 20,
  },
  buttonTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
