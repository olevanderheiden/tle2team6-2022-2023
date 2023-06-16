import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "./custom-input";

export default function Login() {
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    const onLoginPressed = (data) => {
        console.log(data)
    }

    return(
        <View style={styles.container}>
            <CustomInput
                name="login"
                placeholder="Email of telefoonnummer"
                control={control}
                rules={{required: 'Je moet een email of telefoonnummer invoeren'}}
            />
            <CustomInput
                name="password"
                placeholder="Wachtwoord"
                secureTextEntry
                control={control}
                rules={{required: 'Je moet een wachtwoord invoeren', minLength: {value: 8, message: 'Wachtwoord moet minimaal 8 tekens zijn'}}}
            />
            <Pressable onPress={handleSubmit(onLoginPressed)} style={styles.loginButton}>
                <Text>Login</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={styles.register}>Nog geen account? Klik hier!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300
      },
      register: {
        alignSelf: "center",
        color: "blue",
        textDecorationLine: "underline"
      },
      loginButton: {
        backgroundColor: "skyblue",
        width:80,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
      }
})