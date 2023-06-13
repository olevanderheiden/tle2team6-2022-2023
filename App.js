import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Home from "./components/frontpage";
import Listpage from "./components/listpage";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Frontpage">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Fridge Friend",
            headerStyle: { backgroundColor: "#629ade" },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Listpage"
          component={Listpage}
          options={{
            title: "Fridge Friend",
            headerStyle: { backgroundColor: "#629ade" },
            headerTintColor: "#fff",
          }}
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
