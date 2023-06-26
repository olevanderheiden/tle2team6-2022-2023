import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListviewRenderItem1 from "./listview-render-item";

export default function ListviewItem({ data, isLoaded }) {
  if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      extraData={{}}
      renderItem={({ item }) => <ListviewRenderItem1 item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  listItemWrapper: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
});
