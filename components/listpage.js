import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import ListpageButton from "./listpage-button";
import DropdownFilter from "./dropdown-filter";
import ListviewItem from "./listview-item";

export default function Listpage() {
  return (
    <React.Fragment>
      <DropdownFilter />
      <View style={styles.buttonContainer}>
        <ListpageButton name={"Edit"} />
        <ListpageButton name={"Delete"} />
      </View>
      <SafeAreaView style={styles.container}>
        <ListviewItem />
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  listItemWrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    flexDirection: "row",
    gap: 10,
  },
  listNameWrapper: {
    alignSelf: "center",
  },
  amount: {
    fontSize: 26,
    alignSelf: "center",
    marginLeft: "auto",
  },
  alert: {
    color: "red",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    backgroundColor: "#eeeeee",
  },
  buttonStyle: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 20,
    fontSize: 18,
    color: "#629ade",
  },
});
