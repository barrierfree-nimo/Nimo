import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityArchiveStyle = StyleSheet.create({
  search_container: {
    flex: 1,
    flexDirection: "row",
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
    justifyContent: "space-around",
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
    backgroundColor: "#D9D9D9",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  exist_text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CommunityArchiveStyle;
