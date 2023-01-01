import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityMainStyle = StyleSheet.create({
  choice_box_wrapper: {
    flexDirection: "row",
    width: SCREEN_WIDTH,
    height: "auto",
    justifyContent: "space-around",
  },
  choice_box: {
    display: "flex",
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 4,
    backgroundColor: "green",
    borderRadius: 20,
    borderColor: "#000000",
    justifyContent: "center",
  },
  choice_box_text: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CommunityMainStyle;
