import { StyleSheet, View, Text } from "react-native";
import React, { UseState } from "react";

export default function Header() {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Text>This is a header</Text>
      </View>
    </React.Fragment>
  );
}

//HOW THE FUCK DO YOU STYLE IN REACT AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    maxHeight: "30",
    backgroundColor: "#629ade",
  },
});
