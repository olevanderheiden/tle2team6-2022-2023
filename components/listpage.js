import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ListpageButton from "./listpage-button";
import DropdownFilter from "./dropdown-filter";
import ListviewItem from "./listview-item";

export default function Listpage() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //Check your expo ip (under the QR code. remove 'exp://' and the port) everytime you 'npx expo start' and replace the ip
    //Also make sure the backend repo is up-to-date locally and xampp is running
    const url = 'https://stud.hosted.hr.nl/1000200/fridge_friend/back-end-handlers/list-item-get-handler.php';
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
      setIsLoaded(true)
    } catch(error){
      
      console.error(error);
    }
  }

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
        <ListviewItem data={data} isLoaded={isLoaded}/>
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
