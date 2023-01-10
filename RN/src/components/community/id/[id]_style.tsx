import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const communityDetailStyle = StyleSheet.create({
  community_container: {
    width: SCREEN_WIDTH - 40,
    flex: 9,
    alignItems: "center",
    padding: 20,
  },
  title_container: {
    flex: 2,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
  },
  title_text: {
    color: "#00284E",
    fontSize: 23,
    fontWeight: "700",
    marginTop: 5,
  },
  title_container_sub: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  time_text: {
    textAlign: "right",
    textAlignVertical: 'center',
    color: "#B9B9B9",
    fontSize: 16,
    fontWeight: "500",
  },
  modal_btn: {
    borderWidth: 1,
    borderColor: "#C3C3C3",
    justifyContent: "center",
    paddingHorizontal: 3,
    borderRadius: 5,
    marginLeft: 10
  },
  modal_btn_text: {
    color: "#C3C3C3",
    fontSize: 13,
    fontWeight: "400",
  },
  lineStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#00284E",
    marginVertical: 6,
  },
  content_container: {
    flex: 5,
    width: SCREEN_WIDTH - 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00284E",
    marginBottom: 20,
  },
  content_scroll: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  content_text: {
    fontSize: 19,
    fontWeight: "500",
    paddingVertical: 15,
  },
  comment_container: {
    flex: 4,
    width: SCREEN_WIDTH - 70,
  },
  comment_scroll: {
    width: SCREEN_WIDTH - 70,
  },
  comment_title: {
    fontSize: 19,
    fontWeight: "900",
    color: "#00284E",
  },
  comment_text: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
    color: "#B9B9B9",
  },
  user_comment_container: {
    flex: 1,
    width: SCREEN_WIDTH - 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingVertical: 10,
  },
  user_comment_input: {
    flex: 6,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  user_comment_apply: {
    flex: 1,
    backgroundColor: "#00284E",
    borderRadius: 10,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  user_comment_apply_text: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  
});

export default communityDetailStyle;
