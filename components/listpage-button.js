import { Pressable, StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";

export default function ListpageButton({ name, buttonHandler }) {
  return (
    <React.Fragment>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#fff"
        onPress={buttonHandler}
      >
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableHighlight>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: 100,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 20,
  },
  buttonText: {
    padding: 8,
    fontSize: 18,
    color: "#629ade",
  },
});
