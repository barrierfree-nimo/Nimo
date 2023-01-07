import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const msgDetailStyle = StyleSheet.create({
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
    width: SCREEN_WIDTH,
    flex: 7,
    paddingTop: 10,
  },
  scroll: {
    width: SCREEN_WIDTH,
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 40,
    alignContent: "center",
  },
  choice_box: {
    width: SCREEN_WIDTH - 80,
    paddingVertical: 20,
    marginBottom: 10,
  },
  choice_box_child: {
    width: SCREEN_WIDTH - 90,
    marginTop: 10,
    justifyContent: "center",
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
