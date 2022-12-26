import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00284E",
  },
  container_header: {
    width: SCREEN_WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD542'
  },
  container_contents: {
    width: "95%",
    height: "90%",
    alignItems: "center",
  },
  container_exit: {
    width: SCREEN_WIDTH - 80,
    height: 50,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: '#FF4D4D'
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
  exit_div: {
    position: "absolute",
    top: SCREEN_HEIGHT - 60,
    width: SCREEN_WIDTH - 80,
    alignItems: "center",
    justifyContent: "center",
  },
  exit_btn: {
    width: SCREEN_WIDTH - 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4D4D",
    borderRadius: 15,
    overflow: "hidden",
  },
  exit_btn_text: {
    fontSize: 30,
    fontWeight: "800",
  },
  navigate_btn_container: {
    position: "absolute",
    top: SCREEN_HEIGHT - 190,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  navigate_btn: {
    width: 130,
    height: 50,
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
