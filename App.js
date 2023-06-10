import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Frontpage from "./components/frontpage";
import Header from "./components/header";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Frontpage />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
