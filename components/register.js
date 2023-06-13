import { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Pressable, Text } from "react-native";

export default function Register() {
    const [name, onChangeName] = useState('')
    const [email, onChangeEmail] = useState('')
    const [phonenumber, onChangePhonenumber] = useState('')
    const [password, onChangePassword] = useState('')
    const [passwordRepeat, onChangePasswordRepeat] = useState('')
    return(
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            placeholder="Naam"
            value={name}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={email}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePhonenumber}
            placeholder="Telefoonnummer"
            value={phonenumber}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            secureTextEntry={true}
            placeholder="Wachtwoord"
            value={password}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePasswordRepeat}
            secureTextEntry={true}
            placeholder="Wachtwoord herhalen"
            value={passwordRepeat}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      register: {
        alignSelf: "center",
        color: "blue",
        textDecorationLine: "underline"
      }
})