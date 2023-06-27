import { Alert, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import FrontpageButton from "./frontpage-button";
import AuthContext from "./auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const { setIsSignedIn } = useContext(AuthContext);
  const logoutFunc = () => {
    Alert.alert("Log uit", "Weet je zeker dat je wilt uitloggen?", [
      {
        text: "nee",
        style: "cancel",
      },
      {
        text: "ja",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("user");
          } catch (e) {
            //error
          }
          setIsSignedIn(false);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <FrontpageButton destination={"Listpage"} cleanText={"Content list"} />
      <FrontpageButton destination={"Profile"} cleanText={"Profile"} />
      <FrontpageButton destination={"Settings"} cleanText={"Settings"} />
      <FrontpageButton
        destination={"LogOut"}
        cleanText={"Log out"}
        logout={logoutFunc}
      />
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
