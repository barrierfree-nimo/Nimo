import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/components/Splash";
import MainStackNavigator from "./src/components/navigators/MainStackNavigator";
import AuthStackNavigator from "./src/components/navigators/AuthStackNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
        <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;