import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const snsDetailStyle = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 120,
    justifyContent: "center",
    alignItems: "center",
  },
  phone_detail_div: {
    height: "80%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  img_profile: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
  text_title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: "700",
    marginTop: 5,
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    width: SCREEN_WIDTH - 80,
  },
  press_msg_text: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: "500",
    marginTop: 5,
    color: "#828282"
  },
  text_container: {
    width: SCREEN_WIDTH,
    flex: 7,
    paddingTop: 10,
  },
  scroll: {
    marginTop: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
    alignContent: "center",
  },
  choice_box: {
    width: SCREEN_WIDTH - 80,
    marginVertical: 10,
    paddingVertical: 20,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
  },
  choice_box_child: {
    width: SCREEN_WIDTH - 120,
    backgroundColor: "#00284E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
  },
  text_notice_select: {
    color: "#00284E",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  text_choice: {
    wordWrap: "break-word",
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
    overflow: "hidden",
  },
});

export default snsDetailStyle;
