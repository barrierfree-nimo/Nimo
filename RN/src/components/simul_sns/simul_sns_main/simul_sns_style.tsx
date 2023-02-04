import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulSnsStyle = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 120,
    justifyContent: "center",
    alignItems: "center",
  },
  sns_div: {
    width: SCREEN_WIDTH - 40,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  sns_div_title: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 40,
    marginTop: 60,
    marginLeft: 40,
  },
  text_title: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "900",
  },
  ic_sns: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    marginTop: 5,
  },
  msg_card_div: {
    flex: 10,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
  },
});

export default SimulSnsStyle;
