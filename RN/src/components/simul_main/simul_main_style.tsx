import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulMainStyle = StyleSheet.create({
  img_galaxy: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 120,
    marginTop: 20,
    resizeMode: "stretch",
  },
  phone_div: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 100,
    justifyContent: "center",
    alignItems: "center",
  },
  img_push: {
    width: SCREEN_WIDTH - 80,
    height: SCREEN_WIDTH / 5,
    marginTop: 30,
    resizeMode: "stretch",
  },
  phone_push_div: {
    flex: 4,
    width: SCREEN_WIDTH - 80,
    justifyContent: "center",
    alignItems: "center",
  },
  phone_app_div: {
    flex: 8,
    width: SCREEN_WIDTH - 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  img_app_icon: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 6,
    marginTop: 20,
  },
  phone_bottom_div: {
    flex: 5,
    width: SCREEN_WIDTH - 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_bottom_app_icon: {
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
  },
});

export default SimulMainStyle;
