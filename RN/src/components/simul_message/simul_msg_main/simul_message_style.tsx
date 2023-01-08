import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulMsgStyle = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 120,
    justifyContent: "center",
    alignItems: "center",
  },
  message_div: {
    width: SCREEN_WIDTH - 40,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text_title: {
    alignSelf: "flex-start",
    margin: 30,
    fontSize: 32,
    fontWeight: "900",
  },
  msg_card_div: {
    flex: 10,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
  },
});

export default SimulMsgStyle;
