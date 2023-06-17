import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Your Profile will load here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    height: "100%",
  },
});
