import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Pressable,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "./custom-input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect } from "react";
import AuthContext from "./auth-context";

export default function Login() {
  const navigation = useNavigation();
  const { isSignedIn } = useContext(AuthContext)
  const { setIsSignedIn } = useContext(AuthContext)

  useEffect(() => {
    async function checkLogin() {
      if(await getData()){
        setIsSignedIn(true)
      }
    }
    checkLogin()
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginPressed = async (data) => {
    const url =
      "https://stud.hosted.hr.nl/1000200/fridge_friend/accounts/login.php";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrPhone: data.login,
          password: data.password,
        }),
      });
      const jsonData = await response.json();
      storeData(jsonData);
      setIsSignedIn(true)
    } catch (error) {
      console.log(error);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <Text>Email of telefoonnummer</Text>
        <CustomInput
          name="login"
          placeholder="Email"
          control={control}
          rules={{ required: "Je moet een email invoeren" }}
          keyboardType="email-address"
          autoComplete="email"
        />
        <Text>Wachtwoord</Text>
        <CustomInput
          name="password"
          placeholder="Wachtwoord"
          secureTextEntry
          control={control}
          rules={{
            required: "Je moet een wachtwoord invoeren",
            minLength: {
              value: 8,
              message: "Wachtwoord moet minimaal 8 tekens zijn",
            },
          }}
          autoComplete="current-password"
        />
        <Pressable
          onPress={handleSubmit(onLoginPressed)}
          style={styles.loginButton}
        >
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Nog geen account? Klik hier!</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  register: {
    alignSelf: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "skyblue",
    width: 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
