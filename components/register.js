import { SafeAreaView, TextInput, StyleSheet, View, Pressable, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "./custom-input";

export default function Register() {

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onRegisterPressed = (data) => {
        console.log(data)
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container}>
                <CustomInput
                    name="name"
                    placeholder="Vul hier je naam in"
                    control={control}
                    rules={{required: 'Je moet een Naam invoeren'}}
                    autoCapitalize="sentences"
                    autoComplete="name"
                />
                <CustomInput
                    name="email"
                    placeholder="Vul hier je email adress in"
                    control={control}
                    rules={{required: 'Je moet een email invoeren'}}
                    keyboardType="email-address"
                    autoComplete="email"
                />
                <CustomInput
                    name="phonenumber"
                    placeholder="Vul hier je telefoonnummer in"
                    control={control}
                    rules={{required: 'Je moet een telefoonnummer invoeren'}}
                    keyboardType="number-pad"
                    autoComplete="tel"
                />
                <CustomInput
                    name="password"
                    placeholder="Vul hier je wachtwoord in"
                    control={control}
                    rules={{required: 'Je moet een wachtwoord invoeren'}}
                    autoComplete="current-password"
                />
                <CustomInput
                    name="repeatPassword"
                    placeholder="Herhaal hier je wachtwoord"
                    control={control}
                    rules={{required: 'Je wachtwoord is niet hetzelfde'}}
                />
                <Pressable onPress={handleSubmit(onRegisterPressed)} style={styles.registerButton}>
                    <Text>Register</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
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
      registerButton: {
        backgroundColor: "skyblue",
        width:80,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
      }
})