import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityWriteStyle = StyleSheet.create({
  title_text: {
    fontSize: 20,
    fontWeight: "700",
    marginRight: 20,
    color: "#00284E",
  },
  container_tag: {
    width: SCREEN_WIDTH - 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  container_title: {
    width: SCREEN_WIDTH - 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  container_content: {
    width: SCREEN_WIDTH - 60,
    flex: 7,
  },
  tag_input: {
    width: 150,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: "#E6E6E6",
    fontSize: 24,
  },
  title_input: {
    width: SCREEN_WIDTH - 130,
    height: 40,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#E6E6E6",
    fontSize: 20,
  },
  content_input: {
    flex: 6,
    width: SCREEN_WIDTH - 60,
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    fontSize: 20,
    textAlignVertical: "top",
  },
  btn_wrapper: {
    flex: 2,
    flexDirection: "row",
    width: SCREEN_WIDTH - 60,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#00284E",
    width: SCREEN_WIDTH / 3 + 20,
    height: SCREEN_WIDTH / 7,
    borderRadius: 20,
    borderColor: "#000000",
    justifyContent: "center",
    padding: 5,
  },
  btn_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CommunityWriteStyle;
