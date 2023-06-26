import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ListpageButton from "./listpage-button";
import ListviewItem from "./listview-item";
import SelectedContext from "./selected-context";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Listpage() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selected, setSelected] = useState([]);
  const selectedState = { selected, setSelected };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setDate(currentDate);
  };

  async function fetchData() {
    //Check your expo ip (under the QR code. remove 'exp://' and the port) everytime you 'npx expo start' and replace the ip
    //Also make sure the backend repo is up-to-date locally and xampp is running
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/includes/back-end-handlers/list-item-get-handler.php";
    try {
      const response = await fetch(url);
      let jsonData = await response.json();
      for (let i = 0; i < Object.keys(jsonData).length; i++) {
        if (i !== 0 && jsonData[i].product_id == jsonData[i - 1].product_id) {
          if (!jsonData[i - 1]["subItems"]) {
            jsonData[i - 1]["subItems"] = [];
            jsonData[i - 1]["amount"] = 1;
          }
          jsonData[i - 1]["subItems"].push(jsonData[i]);
          jsonData[i - 1]["amount"] = jsonData[i - 1]["amount"] + 1;
          jsonData.splice(i, 1);
          i--;
        }
      }
      setData(jsonData);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  const editButtonHandler = () => {
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/includes/back-end-handlers/product-user-update.php";
    if (selected.length > 1) {
      alert("You can't edit multiple Items at once!");
      return;
    } else if (selected.length <= 0) {
      alert("select an item first!");
      return;
    }
    if (selected.length > 1) {
      alert("You can't edit multiple Items at once!");
      return;
    } else if (selected.length <= 0) {
      alert("select an item first!");
      return;
    }
    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productUserId: selected[0],
          expirationDate: date,
        }),
      })
        .then(fetchData())
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteButtonHandler = async () => {
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/includes/back-end-handlers/delete-product-user-handler.php";
    if (selected.length <= 0) {
      alert("select an item first!");
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productUserId: selected[0],
        }),
      });
      setSelected(selected.splice(1));
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SelectedContext.Provider value={selectedState}>
      <View style={styles.buttonContainer}>
        <ListpageButton name={"Edit"} buttonHandler={editButtonHandler} />
        <DateTimePicker value={date} onChange={onChange} />
        <ListpageButton name={"Delete"} buttonHandler={deleteButtonHandler} />
      </View>
      <SafeAreaView style={styles.container}>
        <ListviewItem data={data} isLoaded={isLoaded} />
      </SafeAreaView>
    </SelectedContext.Provider>
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
