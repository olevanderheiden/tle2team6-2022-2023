import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function ListpageButton({ name }) {

  return (
    <React.Fragment>
      <Pressable
        onPress={() => {
          if ((name = "delete")) {
            buttonHandler(
              "https://stud.hosted.hr.nl/1000200/fridge_friend/back-end-handlers/delete-product-user-handler.php"
            );
          } else if ((name = "edit")) {
            buttonHandler(
              "https://stud.hosted.hr.nl/1000200/fridge_friend/back-end-handlers/product-user-update.php"
            );
          }
        }}
      >
        <Text style={styles.buttonStyle}>{name}</Text>
      </Pressable>
    </React.Fragment>
  );
  async function buttonHandler(url) {
    if ((name = "delete")) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error(error);
      }
    } else if ((name = "edit")) {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
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
