import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function FrontpageButton({ destination }) {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(destination)}
      >
        <Text style={styles.buttonText}>{destination} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "50%",
  },
  buttonText: {
    backgroundColor: "#ffffff",
    width: "100%",
    aspectRatio: "1/1",
    color: "#629ade",
    fontSize: 20,
  },
  button: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRightcolor: "gray",
    borderRightWidth: StyleSheet.hairlineWidth,
  },
});
