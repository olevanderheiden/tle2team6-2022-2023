import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function ListviewRenderItem1(item) {
    item = item.item
    const [selectedId, setSelectedId] = useState([]);
    const [showDetails, setShowDetails] = useState(false)
    return(
        <React.Fragment>
            <Pressable style={!selectedId.includes(item.id) ? styles.listItemWrapper : [styles.listItemWrapper, {backgroundColor: 'lightgrey'}]} onLongPress={() => {
                if (!selectedId.includes(item.id)) {
                setSelectedId([...selectedId, item.id]);
                return;
                } else {
                setSelectedId(selectedId.filter((id) => id !== item.id));
                return;
                }
            }}
            onPress={() => setShowDetails(!showDetails)}>
                <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
                <View style={styles.listNameWrapper}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>THT: <Text style={styles.alert}>{item.expiration_date}</Text></Text>
                </View>
                <Text style={styles.amount}>{!item.amount ? 1 : item.amount}X</Text>
            </Pressable>
            {showDetails && item.subItems ? 
                (
                    
                    <FlatList data={item.subItems}
                    renderItem={({item}) => (
                        <View style={styles.detailWrapper}>
                            <View style={styles.detailItemWrapper}>
                                <Text>Ten minste houdbaar tot <Text style={styles.alert}>{item.expiration_date}</Text></Text>
                            </View>
                        </View>
                    )}/>
                ): null}
          </React.Fragment>
    )
}

const styles = StyleSheet.create({
    listItemWrapper: {
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#aaa",
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
      marginLeft: 'auto',
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
        backgroundColor: "#ccc"
    },
    detailItemWrapper: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#aaa",
        padding: 10
    }
  });
  