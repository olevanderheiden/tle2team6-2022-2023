import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function ListpageButton({name}) {
    return(
        <React.Fragment>
            <Pressable onPress={() => {}} >
                <Text style={styles.buttonStyle}>{name}</Text>
            </Pressable>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
      padding: 8,
      borderWidth: 1,
      borderColor: "#aaa",
      borderRadius: 20,
      fontSize: 18,
      color: "#629ade",
    },
  });