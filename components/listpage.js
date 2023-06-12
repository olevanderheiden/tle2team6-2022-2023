import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { UseState } from "react";
import ListpageButton from "./listpage-button";

export default function Listpage() {
  return (
    <React.Fragment>
      <View style={styles.buttonContainer}>
        <ListpageButton
          name={'Filters'}
        />
        <ListpageButton
          name={'Edit'}
        />
        <ListpageButton
          name={'Delete'}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList data={[{name: 'milk', tht: '01-02-1238', amount: '1'}, {name: 'butter', tht: '24-06-1984', amount: '3'}, {name: 'something else', tht: '27-12-1998', amount: '5'}]} renderItem={({item}) => (
          <View style={styles.listItemWrapper}>
            <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
            <View style={styles.listNameWrapper}>
              <Text>{item.name}</Text>
              <Text>THT: <Text style={styles.alert}>{item.tht}</Text></Text>
            </View>
            <Text style={styles.amount}>{item.amount}X</Text>
          </View>
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
    borderBottomColor: "#eee",
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
