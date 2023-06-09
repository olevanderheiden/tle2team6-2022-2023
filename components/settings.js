import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text style={styles.labelText}>App version:</Text>
        <Text>v0.1.3-alpha</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.labelText}>More settings comming soon..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#eaeaea",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  labelText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginTop: 25,
  },
});
