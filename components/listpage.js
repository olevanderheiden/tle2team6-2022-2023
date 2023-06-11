import { StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";

export default function Frontpage() {
  return (
    <React.Fragment>
      <Text>This is list page</Text>
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
