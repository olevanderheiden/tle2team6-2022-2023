import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import SelectedContext from "./selected-context";

export default function ListviewRenderItem1(item) {
  item = item.item;
  const { selected } = useContext(SelectedContext);
  const { setSelected } = useContext(SelectedContext);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <React.Fragment>
      <Pressable
        style={
          !selected.includes(item.id)
            ? styles.listItemWrapper
            : [styles.listItemWrapper, { backgroundColor: "#aaa" }]
        }
        onLongPress={() => {
          if (!selected.includes(item.id)) {
            setSelected([...selected, item.id]);
            return;
          } else {
            setSelected(selected.filter((id) => id !== item.id));
            return;
          }
        }}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{ width: 50, height: 50 }}
        />
        <View style={styles.listNameWrapper}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>
            THT: <Text style={styles.alert}>{item.expiration_date}</Text>
          </Text>
        </View>
        <Text style={styles.amount}>{!item.amount ? 1 : item.amount}X</Text>
      </Pressable>
      {showDetails && item.subItems ? (
        <FlatList
          data={item.subItems}
          renderItem={({ item }) => (
            <Pressable
              style={
                !selected.includes(item.id)
                  ? styles.detailWrapper
                  : [styles.detailWrapper, { backgroundColor: "#aaa" }]
              }
              onLongPress={() => {
                if (!selected.includes(item.id)) {
                  setSelected([...selected, item.id]);
                  return;
                } else {
                  setSelected(selected.filter((id) => id !== item.id));
                  return;
                }
              }}
            >
              <View style={styles.detailItemWrapper}>
                <Text>
                  Ten minste houdbaar tot{" "}
                  <Text style={styles.alert}>{item.expiration_date}</Text>
                </Text>
              </View>
            </Pressable>
          )}
        />
      ) : null}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  listItemWrapper: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#999",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  listNameWrapper: {
    alignSelf: "center",
    gap: 10,
  },
  amount: {
    fontSize: 26,
    marginLeft: "auto",
  },
  alert: {
    color: "red",
    fontWeight: "bold",
  },
  name: {
    width: 250,
  },
  details: {
    padding: 10,
  },
  detailWrapper: {
    backgroundColor: "#ddd",
  },
  detailItemWrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#999",
    padding: 10,
  },
});
