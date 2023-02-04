import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Platform } from "react-native";
import Axios from "axios";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Subscription } from 'expo-modules-core';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

async function sendPushNotification(expoPushToken : any) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let pushToken;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    console.log('statue : ' + existingStatus)
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    pushToken = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(pushToken);

    let localPushToken;
    localPushToken = await AsyncStorage.getItem("push_token");

    const accessToken = await AsyncStorage.getItem("user_Token");

    if(!localPushToken) {
      AsyncStorage.setItem("push_token", pushToken);
      await Axios.post(`http://172.30.1.85:5000` + "/notification/save", 
        { pushToken : `${pushToken}` },
        { headers: { accessToken: `${accessToken}`} }        
      ).then((res) => {
        console.log(res)
      });
    } 

  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return pushToken;
}

const Notification = () => {
  const [expoPushToken, setExpoPushToken] = useState<String | undefined>('');
  const [notification, setNotification] = useState<Notifications.Notification>();
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(typeof notificationListener.current !== 'undefined' && typeof responseListener.current !== 'undefined') {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <View></View>
  );
};

export default Notification;
