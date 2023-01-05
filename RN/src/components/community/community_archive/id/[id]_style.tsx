import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const communityDetailStyle = StyleSheet.create({
  community_container: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 200,
    alignItems: "center",
    padding: 30,
  },
  title_text: {
    color: "#00284E",
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 5,
  },
  time_text: {
    color: "#00284E",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  lineStyle: {
    width: SCREEN_WIDTH - 80,
    borderWidth: 1,
    borderColor: "#00284E",
    marginVertical: 10,
  },
  content_container: {
    width: SCREEN_WIDTH - 80,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#00284E",
    marginBottom: 20,
  },
  content_text: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  comment_container: {
    width: SCREEN_WIDTH - 80,
  },
  comment_title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#00284E",
  },
  comment_text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00284E",
  },
});

export default communityDetailStyle;
