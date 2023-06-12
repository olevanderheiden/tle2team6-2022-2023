import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FrontpageButton from "./frontpage-button";
import Header from "./header";

export default function Frontpage() {
  return (
    <React.Fragment>
      <View style={styles.buttonContainer}>
        <FrontpageButton destination={"Listpage"} />
        <FrontpageButton destination={"Account"} />
        <FrontpageButton destination={"Settings"} />
        <FrontpageButton destination={"CameraFeed"} />
      </View>
    </React.Fragment>
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
