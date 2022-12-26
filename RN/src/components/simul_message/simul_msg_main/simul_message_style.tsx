import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulMsgStyle = StyleSheet.create({
  img_bg: {
    position: "absolute",
    width: SCREEN_WIDTH - SCREEN_WIDTH / 14,
    height: SCREEN_HEIGHT - 100,
    marginTop: 20,
    resizeMode: "stretch",
  },
  phone_div: {
    position: "absolute",
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 100,
    justifyContent: "center",
    alignItems: "center",
  },
  message_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 300,
    justifyContent: "center",
    alignItems: "center",
  },
  text_title: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 32,
    fontWeight: "900",
  },
  msg_card_div: {
    flex: 10,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
  },
});

export default SimulMsgStyle;
