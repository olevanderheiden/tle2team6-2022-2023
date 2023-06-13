import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Home from "./components/frontpage";
import Listpage from "./components/listpage";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
function standardOptions(screenTitle) {
  return {
    title: screenTitle,
    headerStyle: { backgroundColor: "#629ade" },
    headerTintColor: "#fff",
    headerBackTitleVisible: false,
  };
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Frontpage">
        <Stack.Screen
          name="Home"
          component={Home}
          options={standardOptions("Fridge Friend")}
        />
        <Stack.Screen
          name="Listpage"
          component={Listpage}
          options={standardOptions("Fridge content")}
        />
        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  stackScreen: {
    color: "blue",
  },
});
