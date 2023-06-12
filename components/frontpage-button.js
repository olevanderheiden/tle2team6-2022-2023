import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";

export default function FrontpageButton({ test }) {
  return (
    <Pressable style={styles.test} onPress={() => console.log({ test })}>
      <Text style={styles.button}>This is a button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: "100%",
    aspectRatio: "1/1",
  },
  test: {
    backgroundColor: "blue",
    width: "50%",
  },
});
