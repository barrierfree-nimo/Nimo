import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityWriteStyle = StyleSheet.create({
  title_input: {
    flex: 1,
    width: SCREEN_WIDTH - 100,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    fontSize: 24,
  },
  content_input: {
    flex: 6,
    width: SCREEN_WIDTH - 100,

    padding: 20,
    marginTop: 20,

    borderRadius: 10,
    backgroundColor: "#D9D9D9",

    fontSize: 24,
    textAlignVertical: "top",
  },
  btn_wrapper: {
    flex: 2,
    flexDirection: "row",
    width: SCREEN_WIDTH - 30,
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "green",
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 5,
    borderRadius: 20,
    borderColor: "#000000",
    justifyContent: "center",
    padding: 5,
  },
  btn_text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CommunityWriteStyle;
