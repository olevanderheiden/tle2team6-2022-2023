import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import React from "react";

const profileName = "testUser";
const email = "test@email.com";
const accountDate = Date("1-1-23");

export default function Profile() {
  return (
    <View style={styles.bg}>
      <View style={[styles.infoCard, styles.card]}>
        <Text style={styles.labelText}>Username:</Text>
        <Text>{profileName}</Text>
        <Text style={styles.labelText}>Email:</Text>
        <Text>{email}</Text>
        <Text style={styles.labelText}>Creation date:</Text>
        <Text>{accountDate}</Text>
      </View>

      <View style={[styles.card, styles.buttonCard]}>
        <TouchableHighlight
          underlayColor="#eaeaea"
          style={[styles.button, styles.editButton]}
          onPress={() => alert("This button will let you edit your profile!")}
        >
          <Text style={styles.editText}>edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#eaeaea"
          style={[styles.button, styles.deleteButton]}
          onPress={() => alert("This button wil let you delete your profile!")}
        >
          <Text style={styles.deleteText}>delete</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#eaeaea",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  labelText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 20,
  },
  infoCard: {
    marginTop: 25,
    marginBottom: 25,
  },
  buttonCard: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: "red",
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#629ade",
  },
  editText: {
    color: "#629ade",
    fontWeight: "bold",
  },
});
