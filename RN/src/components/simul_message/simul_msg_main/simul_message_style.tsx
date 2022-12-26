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
    flex: 1,
    right: 120,
    fontSize: 35,
    marginTop: 20,
    fontWeight: "900",
  },
  msg_card_div: {
    flex: 10,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
  },
  navigate_btn_container: {
    position: "absolute",
    top: SCREEN_HEIGHT - 190,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  navigate_btn: {
    width: 130,
    height: 50,
    padding: 10,

    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFD542",
    borderRadius: 15,
    overflow: "hidden",
  },
  navigate_btn_text: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "800",
  },
  exit_btn: {
    width: SCREEN_WIDTH - 150,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 750,
    backgroundColor: "#FF4D4D",
    borderRadius: 15,
    overflow: "hidden",
  },
  text_exit: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default SimulMsgStyle;
