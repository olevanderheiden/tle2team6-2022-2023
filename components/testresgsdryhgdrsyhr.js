import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListpageButton from "./listpage-button";
import DropdownFilter from "./dropdown-filter";

const FlatListItem = ({ item, selected, onLongPress }) => {
  return (
    <Pressable onLongPress={() => onLongPress(item.id)}>
      <View style={[styles.listItemWrapper, selected && styles.selected]}>
        <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
        <View style={styles.listNameWrapper}>
          <Text>{item.name}</Text>
          <Text>THT: <Text style={styles.alert}>{item.tht}</Text></Text>
        </View>
        <Text style={styles.amount}>{item.amount}X</Text>
      </View>
    </Pressable>
  );
};

export default function Listpage() {
  const [selectedId, setSelectedId] = useState([]);

  const handleSelectItem = (item) => {
    if (!selectedId.includes(item)) {
      setSelectedId([...selectedId, item]);
      console.log(selectedId);
      return;
    }
  };

  const renderItem = ({item}) => {
    return (
      <FlatListItem 
        item={item} 
        selected={selectedId === item.id} 
        onLongPress={handleSelectItem}
      />
    );
  };
  
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
          renderItem={renderItem}/>
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
  selected: {
    backgroundColor: "#629ade",
  },
});
