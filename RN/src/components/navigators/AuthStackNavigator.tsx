import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainStackNavigator from "./MainStackNavigator";
import Login from "../login/login";
import Register from "../register/register/register";

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;