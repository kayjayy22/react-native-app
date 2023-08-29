import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { LOGIN_STYLES } from "../styles/Login.styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "admin" && password === "admin") {
      navigation.replace("Home");
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Your username or password is invalid!"
      );
    }
  }

  return (
    <SafeAreaView style={LOGIN_STYLES.container}>
      <View style={LOGIN_STYLES.fullWidth}>
        <Text style={LOGIN_STYLES.heading}>Together Light</Text>
        <TextInput
          placeholder="Username"
          style={LOGIN_STYLES.input}
          value={username}
          autoFocus={true}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          style={LOGIN_STYLES.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={LOGIN_STYLES.button} onPress={login}>
          <Text style={LOGIN_STYLES.button.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
