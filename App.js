import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./views/Login";
import Home from "./views/Home";
import Post from "./views/Post";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} options={{ id: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
