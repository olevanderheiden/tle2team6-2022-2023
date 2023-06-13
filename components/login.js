import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Pressable, Text } from "react-native";

export default function Login() {
    const [login, onChangeLogin] = useState('')
    const [password, onChangePassword] = useState('')
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChange={onChangeLogin}
                placeholder="Email of Telefoonnummer"
                value={login}
            />
            <TextInput
                style={styles.input}
                onChange={onChangePassword}
                secureTextEntry={true}
                placeholder="Wachtwoord"
                value={password}
            />
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={styles.register}>Nog geen account? Klik hier!</Text>
            </Pressable>
        </View>
    );
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