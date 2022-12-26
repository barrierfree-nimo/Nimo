import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStackNavigator from "./AuthStackNavigator";

import Main from "../main/main";
import Quiz from "../quiz/quiz";
import Community from "../community/community";
import Info from "../info/info";

import SimulMain from "../simul_main/simul_main";
import MessageSimul from "../simul_message/simul_message";
import MessageDetail from "../simul_message/id";
import CorrectPage from "../simul_message/correct";
import WrongPage from "../simul_message/wrong";

import VoiceSimulMain from "../simul_voice/id";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="SimulMain" component={SimulMain} />
        <Stack.Screen name="MessageSimul" component={MessageSimul} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} />
        <Stack.Screen name="CorrectPage" component={CorrectPage} />
        <Stack.Screen name="WrongPage" component={WrongPage} />
        <Stack.Screen name="VoiceSimulMain" component={VoiceSimulMain}/>

        <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
        {/* <Stack.Screen name="VoiceSimulCommentary" component={VoiceSimulCommentary}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
