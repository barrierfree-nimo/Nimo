import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const msgDetailStyle = StyleSheet.create({
  img_bg: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
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
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  img_profile: {
    width: 60,
    height: 60,
  },
  text_title: {
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
  text_container: {
    width: SCREEN_WIDTH - 80,
    height: 450,
    paddingTop: 10,
  },
  scroll: {
    width: SCREEN_WIDTH - 80,
    flex: 1,
  },
  choice_box: {
    width: SCREEN_WIDTH - 80,
    paddingVertical: 20,
    marginBottom: 60,
  },
  choice_box_child: {
    width: SCREEN_WIDTH - 90,
    marginTop: 10,
    justifyContent: 'center',
  },
  text_choice: {
    wordWrap: "break-word",

    marginLeft: 20,
    marginRight: 10,
    padding: 15,

    fontSize: 20,
    fontWeight: "700",

    backgroundColor: "orange",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default msgDetailStyle;
