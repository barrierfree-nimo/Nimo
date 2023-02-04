import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStackNavigator from "./AuthStackNavigator";

import Main from "../main/main";
import Setting from "../setting/setting";
import AdminNotification from "../setting/admin_notification";
import Quiz from "../quiz/quiz";
import Info from "../info/info";
import AppDoc from "../application_doc/AppDoc";

import SimulMain from "../simul_main/simul_main";
import MessageSimul from "../simul_message/simul_msg_main/simul_message";
import MessageDetail from "../simul_message/id/[id]";

import SnsDetail from "../simul_sns/id/[id]";
import SnsSimul from "../simul_sns/simul_sns_main/simul_sns";
import CorrectPage from "../simul_common/correct";

import VoiceSimul from "../simul_voice/simul_voice_main/simul_voice";
import VoiceDetail from "../simul_voice/id/[id]";
import CorrectPageVoice from "../simul_voice/correct";

import CommunityMain from "../community/communityMain";
import CommunityWrite from "../community/community_write/write";
import CommunityDetail from "../community/id/[id]";
import PatchPost from "../community/post_patch/patch_post";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AdminNotification" component={AdminNotification} />
        <Stack.Screen name="AppDoc" component={AppDoc} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="CommunityMain" component={CommunityMain} />
        <Stack.Screen name="CommunityWrite" component={CommunityWrite} />
        <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
        <Stack.Screen name="CommunityPostPatch" component={PatchPost} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="SimulMain" component={SimulMain} />
        <Stack.Screen name="MessageSimul" component={MessageSimul} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} />
        <Stack.Screen name="SnsSimul" component={SnsSimul} />
        <Stack.Screen name="SnsDetail" component={SnsDetail} />
        <Stack.Screen name="CorrectPage" component={CorrectPage} />
        <Stack.Screen name="VoiceSimul" component={VoiceSimul} />
        <Stack.Screen name="VoiceDetail" component={VoiceDetail} />
        <Stack.Screen name="CorrectPageVoice" component={CorrectPageVoice} />

        <Stack.Screen
          name="AuthStackNavigator"
          component={AuthStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
