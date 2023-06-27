import React from "react";
import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";
import { Controller } from "react-hook-form";

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType = "default",
  autoCapitalize = "none",
  autoComplete = "off",
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <React.Fragment>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            showSoftInputOnFocus={true}
          />
          {error && (
            <Text style={styles.error}>{error.message || "Error"}</Text>
          )}
        </React.Fragment>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: "grey",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10
  },
  error: {
    color: "red",
  },
});
