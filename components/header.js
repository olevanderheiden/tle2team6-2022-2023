import { StyleSheet, View, Text } from "react-native";
import React, { UseState } from "react";

export default function Header() {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Fridge Friend</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: "1",
    display: "flex",
    width: "100%",
    minHeight: "12%",
    maxHeight: "12%",
    backgroundColor: "#629ade",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "7%",
  },
});
