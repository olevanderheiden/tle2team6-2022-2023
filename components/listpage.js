import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListpageButton from "./listpage-button";
import DropdownFilter from "./dropdown-filter";

export default function Listpage() {
  const [selectedId, setselectedId] = useState([]);
  return (
    <React.Fragment>
      <DropdownFilter />
      <View style={styles.buttonContainer}>
        <ListpageButton
          name={'Edit'}
        />
        <ListpageButton
          name={'Delete'}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList data={[
          {id: '1', name: 'milk', tht: '01-02-1238', amount: '1'},
          {id: '2', name: 'butter', tht: '24-06-1984', amount: '3'},
          {id: '3', name: 'something else', tht: '27-12-1998', amount: '5'}]}
          extraData={{}}
          renderItem={({item}) => (
            <Pressable style={!selectedId.includes(item.id) ? styles.listItemWrapper : [styles.listItemWrapper, {backgroundColor: 'red'}]} onLongPress={() => {
              if (!selectedId.includes(item.id)) {
                setselectedId([...selectedId, item.id]);
                return;
              } else {
                setselectedId(selectedId.filter((id) => id !== item.id));
                return;
              }
            }}>
                <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
                <View style={styles.listNameWrapper}>
                  <Text>{item.name}</Text>
                  <Text>THT: <Text style={styles.alert}>{item.tht}</Text></Text>
                </View>
                <Text style={styles.amount}>{item.amount}X</Text>
            </Pressable>
          )}/>
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
    marginLeft: 'auto',
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
