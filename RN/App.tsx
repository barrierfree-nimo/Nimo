import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/components/main/main";
import Login from "./src/components/login/login";
import Register from "./src/components/register/register/register";
import RegisterCheck from "./src/components/register/registercheck/registercheck";
import RegisterInfo from "./src/components/register/registerinfo/registerinfo";
import Quiz from "./src/components/quiz/quiz";
import Community from "./src/components/community/community";
import Info from "./src/components/info/info";

import SimulMain from "./src/components/simul_main/simul_main";
import MessageSimul from "./src/components/simul_message/simul_message";
import MessageDetail from "./src/components/simul_message/id";
import CorrectPage from "./src/components/simul_message/correct";
import WrongPage from "./src/components/simul_message/wrong";

import VoiceSimulStart from "./src/components/simul_voice/simul_voice_start";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterCheck" component={RegisterCheck} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="SimulMain" component={SimulMain} />
        <Stack.Screen name="MessageSimul" component={MessageSimul} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} />
        <Stack.Screen name="CorrectPage" component={CorrectPage} />
        <Stack.Screen name="WrongPage" component={WrongPage} />
        <Stack.Screen name="VoiceSimulStart" component={VoiceSimulStart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00284E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 50,
  },
});

export default App;
