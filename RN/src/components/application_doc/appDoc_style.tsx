import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const AppDocStyle = StyleSheet.create({
  index_container: {
    flex: 1,
    width: SCREEN_WIDTH - 70,
    flexDirection: "row",
    marginTop: 20,
  },
  index_box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  index_text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00284E"
  },
  banner_wrapper: {
    flex: 15,
    width: SCREEN_WIDTH - 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default AppDocStyle;
