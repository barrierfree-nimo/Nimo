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
    width: SCREEN_WIDTH - 60,
    flexDirection: "row",
    marginTop: 20,
  },
  index_box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: "#00284E",
  },
  index_text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00284E",
  },
  search_input: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#ECECEC",
    fontSize: 17,
  },
  search_clear: {
    flex: 1,
    paddingRight: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  search_btn: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#747474",
    marginLeft: 20,
  },
  search_clear_text: {
    fontSize: 17,
    color: "gray",
    fontWeight: "500",
  },
  search_text: {
    fontSize: 17,
    color: "#FFFFFF",
  },
  content_container: {
    flex: 10,
    width: SCREEN_WIDTH - 40,
    borderWidth: 2,
    borderColor: "#00284E",
    marginBottom: 5,
    padding: 10,
    borderRadius: 8,
  },
  write_container: {
    flex: 1,
    width: SCREEN_WIDTH - 40,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#00284E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  write_text: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  exist_text: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "500",
    color: "gray"
  },
});

export default CommunityMainStyle;
