import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Your Settings will load here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    height: "100%",
  },
});
