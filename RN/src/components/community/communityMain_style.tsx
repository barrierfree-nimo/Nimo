import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityMainStyle = StyleSheet.create({
  search_container: {
    flex: 1,
    flexDirection: "row",
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
    justifyContent: "space-around",
  },
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

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  index_text: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  search_input: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
    fontSize: 20,
  },
  search_btn: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FFD542",
    marginLeft: 20,
  },
  search_text: {
    fontSize: 20,
  },
  content_container: {
    flex: 10,
    width: SCREEN_WIDTH - 40,

    backgroundColor: "#D2ECFA",
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  write_container: {
    flex: 1,
    width: SCREEN_WIDTH - 60,
    borderRadius: 15,
    backgroundColor: "#00284E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  write_text: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  exist_text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CommunityMainStyle;
