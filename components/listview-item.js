import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ListviewRenderItem1 from "./listview-render-item";

export default function ListviewItem() {
    const [data, setData] = useState([]);
    const [isloaded, setisLoaded] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    async function fetchData() {
      const url = 'http://145.137.18.116/tle2team6-ml5-2022-2023/includes/back-end-handlers/list-item-get-handler.php';
      try {
        const response = await fetch(url)
        let jsonData = await response.json();
        for(let i = 0; i < Object.keys(jsonData).length; i++){
          if(i !== 0 && jsonData[i].product_id == jsonData[i-1].product_id){
            if(!jsonData[i - 1]["subItems"]){
              jsonData[i - 1]["subItems"] = []
              jsonData[i - 1]["amount"] = 1
            }
            jsonData[i - 1]["subItems"].push(jsonData[i])
            jsonData[i - 1]["amount"] = jsonData[i - 1]["amount"] + 1
            jsonData.splice(i, 1)
            i--
          }
        }
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
            renderItem={({item}) => (<ListviewRenderItem1 item={item}/>)}/>
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
  