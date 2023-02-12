import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  container_header: {
    width: SCREEN_WIDTH,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text_header: {
    color: "#00284E",
    fontSize: 30,
    fontWeight: "900",
  },
  container_contents: {
    width: "95%",
    height: "90%",
    alignItems: "center",
  },
  btnText_exit: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container_exit: {
    width: SCREEN_WIDTH - 80,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFD542",
  },
  exit_btn_text: {
    fontSize: 30,
    fontWeight: "800",
  },
  navigate_btn_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
  },
  navigate_btn: {
    width: 130,
    padding: 10,

    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFD542",
    borderRadius: 15,
    overflow: "hidden",
  },
  navigate_btn_text: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "800",
  },
});

export default CommonStyle;
