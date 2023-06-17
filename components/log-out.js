import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function LogOut({ destination }) {
  return (
    <View style={styles.container}>
      <Text>Your Log Out will load here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    height: "100%",
  },
});
