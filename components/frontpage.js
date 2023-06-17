import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FrontpageButton from "./frontpage-button";

export default function Home() {
  return (
    <View style={styles.container}>
      <FrontpageButton destination={"Listpage"} />
      <FrontpageButton destination={"Profile"} />
      <FrontpageButton destination={"Settings"} />
      <FrontpageButton destination={"LogOut"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    height: "100%",
  },
});
