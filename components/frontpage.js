import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FrontpageButton from "./frontpage-button";
import { FlatList } from "react-native-web";

export default function Home() {
  return (
    <React.Fragment>
      <View style={styles.buttonContainer}>
        <FrontpageButton destination={"Listpage"} />
        <FrontpageButton destination={"Account"} />
        <FrontpageButton destination={"Settings"} />
        <FrontpageButton destination={"CameraFeed"} />
        <FrontpageButton destination={"Login"} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    height: "100%",
  },
});
