import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import AuthContext from "./auth-context";

export default function LogOut({ destination }) {
  // const {setIsSignedIn} = useContext(AuthContext)
  // useEffect(() => {
  //   setIsSignedIn(false)
  // })
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text>Your Log Out will load here</Text>
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
