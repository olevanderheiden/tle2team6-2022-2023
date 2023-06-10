import { StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";
import FrontpageButton from "./frontpage-button";

export default function Frontpage() {
  return (
    <React.Fragment>
      <Text>This is a frontpage</Text>

      <FrontpageButton />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
