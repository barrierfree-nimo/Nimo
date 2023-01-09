import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const communityDetailStyle = StyleSheet.create({
  community_container: {
    width: SCREEN_WIDTH - 40,
    flex: 9,
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
    width: "100%",
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
  user_comment_container: {
    width: SCREEN_WIDTH - 40,
    flex: 1,
    flexDirection: "row",
    marginBottom: 30,
  },
  user_comment_input: {
    flex: 6,
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },
  user_comment_apply: {
    flex: 1,
    backgroundColor: "#00284E",
    borderRadius: 10,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginVertical: 5,
  },
  user_comment_apply_text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  modal_btn: {
    width: "auto",
    backgroundColor: "#FFD542",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  modal_btn_text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
  },
});

export default communityDetailStyle;
