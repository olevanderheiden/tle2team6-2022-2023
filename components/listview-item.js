import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function ListviewItem() {
    const [selectedId, setselectedId] = useState([]);
    function UpdateDatabase(label) {
      const url = '../includes/back-end-handlers/recognition-handler.php';
      fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ label: label }),
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  errorSound.play();
                  throw new Error('Error updating label');
              }
          })
          .then(responseText => {
              successSound.play();
              console.log(responseText);
          })
          .catch(error => {
              errorSound.play();
              console.error(error);
          });
  }
  const [isloaded, setisLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stud.hosted.hr.nl/1000200/crimeWebservice/'
      );
      const jsonData = await response.json();
      setcrimeData(jsonData);
      setisLoaded(true)
    } catch (error) {
      console.error(error);
    }
  };

  if(!isloaded){
    return(
        <View>
            <Text>Loading...</Text>
        </View>
    )
  }
    return(
        <FlatList data={[
            {id: '1', name: 'milk', tht: '01-02-1238', amount: '1'},
            {id: '2', name: 'butter', tht: '24-06-1984', amount: '3'},
            {id: '3', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '4', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '5', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '6', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '7', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '8', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '9', name: 'something else', tht: '27-12-1998', amount: '5'},
            {id: '10', name: 'something else', tht: '27-12-1998', amount: '5'},]}
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
                    <Text>THT: <Text style={styles.alert}>{item.tht}</Text></Text>
                  </View>
                  <Text style={styles.amount}>{item.amount}X</Text>
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
  