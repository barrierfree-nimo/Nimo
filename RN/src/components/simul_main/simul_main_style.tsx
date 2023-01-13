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
    height: SCREEN_HEIGHT - 135,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  img_push: {
    width: SCREEN_WIDTH - 80,
    height: SCREEN_WIDTH / 5,
    marginTop: 20,
    resizeMode: "stretch",
  },
  phone_push_div: {
    flex: 2,
    width: SCREEN_WIDTH - 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30
  },
  phone_app_div: {
    flex: 8,
    width: SCREEN_WIDTH - 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  img_app_icon: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 6,
    marginTop: 20,
  },
  phone_bottom_div: {
    flex: 3,
    width: SCREEN_WIDTH - 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text_notice_div: {
    flex: 1.5,
    paddingHorizontal: 15,
    marginTop: 7,
  },
  text_div: {
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 7,

    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  text_notice: {
    fontSize: 17,
    fontWeight: "200",
    color: "gray",
  },
  img_bottom_app_icon: {
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
  },
});

export default SimulMainStyle;
