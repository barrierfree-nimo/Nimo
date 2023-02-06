import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/components/Splash";
import MainStackNavigator from "./src/components/navigators/MainStackNavigator";
import AuthStackNavigator from "./src/components/navigators/AuthStackNavigator";
import Notification from "./src/components/notification/Notification";

import * as Notifications from 'expo-notifications';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  return (
    <NavigationContainer>  
      <Notification />    
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="MainStackNavigator"
          component={MainStackNavigator}
        />
        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
