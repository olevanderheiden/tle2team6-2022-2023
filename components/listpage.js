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
  const editButtonHandler = async () => {
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/back-end-handlers/product-user-update.php";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("yay");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteButtonHandler = async () => {
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/back-end-handlers/delete-product-user-handler.php";
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("yay");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <DropdownFilter />
      <View style={styles.buttonContainer}>
        <ListpageButton name={"Edit"} buttonHandler={editButtonHandler} />
        <ListpageButton name={"Delete"} buttonHandler={deleteButtonHandler} />
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
