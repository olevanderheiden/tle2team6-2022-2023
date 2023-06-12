import { StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";
import FrontpageButton from "./frontpage-button";

export default function Frontpage() {
  return (
    <View style={styles.buttonContainer}>
      <FrontpageButton test={1} />
      <FrontpageButton test={2} />
      <FrontpageButton test={3} />
      <FrontpageButton test={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "green",
    height: "100%",
  },
});
