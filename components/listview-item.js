import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function ListviewItem() {
    const [selectedId, setselectedId] = useState([]);
    const [data, setData] = useState([]);
    const [isloaded, setisLoaded] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    async function fetchData() {
      const url = 'http://145.137.17.236/tle2team6-ml5-2022-2023/includes/back-end-handlers/list-item-get-handler.php';
      try {
        const response = await fetch(url)
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
        setisLoaded(true)
      } catch(error){
        
        console.error(error);
      }
    }

  if(!isloaded){
    return(
        <View>
            <Text>Loading...</Text>
        </View>
    )
  }
    return(
        <FlatList data={data}
            extraData={{}}
            renderItem={({item}) => (
              <Pressable style={!selectedId.includes(item.id) ? styles.listItemWrapper : [styles.listItemWrapper, {backgroundColor: 'lightgrey'}]} onLongPress={() => {
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
                    <Text>THT: <Text style={styles.alert}>{item.average_shelf_life}</Text></Text>
                  </View>
                  <Text style={styles.amount}>3X</Text>
              </Pressable>
            )}/>
    )
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
      marginLeft: 'auto',
    },
    alert: {
      color: "red",
      fontWeight: "bold",
    },
  });
  