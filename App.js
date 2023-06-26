import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Home from "./components/frontpage";
import Listpage from "./components/listpage";
import Profile from "./components/profile";
import Settings from "./components/settings";
import LogOut from "./components/log-out";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login";
import Register from "./components/register";

export const profileName = "TestUser";
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
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={standardOptions(`${profileName}\'s Profile`)}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={standardOptions(`Settings`)}
        />
        <Stack.Screen
          name="LogOut"
          component={LogOut}
          options={standardOptions(`Log Out`)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
