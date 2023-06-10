import { StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";

export default function FrontpageButton() {
  return (
    <React.Fragment>
      <Text> This is a button</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
