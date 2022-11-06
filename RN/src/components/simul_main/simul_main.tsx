import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SimulMain = () => {
  const [push, setPush] = useState<string>("message");
  const [messageType, setMessageType] = useState<string>("default");
  const [snsType, setSnsType] = useState<string>("default");
  const [callType, setCallType] = useState<string>("default");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/simul_main/galaxy.png")}
        style={styles.img_galaxy}
      />
      <View>
        <Image
          source={require("../../assets/icons/simul_main/ic_app1.png")}
          style={[styles.img_app_icon, { top: 150, right: 95 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app2.png")}
          style={[styles.img_app_icon, { top: 150, right: 5 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app3.png")}
          style={[styles.img_app_icon, { top: 150, left: 5 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app4.png")}
          style={[styles.img_app_icon, { top: 150, left: 95 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app5.png")}
          style={[styles.img_app_icon, { top: 270, right: 95 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app6.png")}
          style={[styles.img_app_icon, { top: 270, right: 5 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app7.png")}
          style={[styles.img_app_icon, { top: 270, left: 5 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app8.png")}
          style={[styles.img_app_icon, { top: 270, left: 95 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app9.png")}
          style={[styles.img_app_icon, { top: 390, right: 95 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app10.png")}
          style={[styles.img_app_icon, { top: 390, right: 5 }]}
        />
        <Image
          source={require("../../assets/icons/simul_main/ic_app11.png")}
          style={[styles.img_app_icon, { top: 390, left: 5 }]}
        />
      </View>

      <TouchableOpacity>
        {snsType === "star" ? (
          <Image
            source={require(`../../assets/icons/simul_main/sns_star.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        ) : (
          <Image
            source={require(`../../assets/icons/simul_main/sns_red.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        )}
        <Image
          source={require(`../../assets/icons/simul_main/sns_default.png`)}
          style={[styles.img_app_icon, { top: 395, left: 95 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {messageType === "star" ? (
          <Image
            source={require(`../../assets/icons/simul_main/message_star.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        ) : (
          <Image
            source={require(`../../assets/icons/simul_main/message_red.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        )}
        <Image
          source={require("../../assets/icons/simul_main/call_default.png")}
          style={[styles.img_app_icon, { top: 600, right: 80 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/simul_main/app_container.png")}
          style={[styles.img_app_icon, { top: 600, right: -40 }]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {callType === "star" ? (
          <Image
            source={require(`../../assets/icons/simul_main/call_star.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        ) : (
          <Image
            source={require(`../../assets/icons/simul_main/call_red.png`)}
            style={[styles.img_app_icon_new, { top: 378, left: 75 }]}
          />
        )}
        <Image
          source={require("../../assets/icons/simul_main/message_default.png")}
          style={[styles.img_app_icon, { top: 600, left: 80 }]}
        />
      </TouchableOpacity>
      <View>
        {push === "sns" ? (
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/sns_push.png")}
              style={styles.img_push}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
        {push === "message" ? (
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/message_push.png")}
              style={styles.img_push}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
        {push === "call" ? (
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/call_push.png")}
              style={styles.img_push}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  img_galaxy: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: 720,
    resizeMode: "stretch",
  },
  img_app_icon: {
    position: "absolute",
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  img_push: {
    position: "absolute",
    top: 60,
    left: -160,

    width: SCREEN_WIDTH - 100,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
  img_app_icon_new: {
    position: "absolute",
    width: 108,
    height: 108,
    resizeMode: "stretch",
  },
});

export default SimulMain;
