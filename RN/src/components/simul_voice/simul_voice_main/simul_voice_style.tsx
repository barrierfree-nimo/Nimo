import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulVoiceStyle = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 100,
    justifyContent: "center",
    alignItems: "center",
  },
  voice_div: {
    width: SCREEN_WIDTH - 40,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  voice_div_title: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 40,
    marginTop: 60,
    marginLeft: 40,
  },
  text_title: {
    alignSelf: "flex-start",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "900",
  },
  ic_phone: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 15,
  },
  msg_card_div: {
    flex: 10,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
  },
});

export default SimulVoiceStyle;
