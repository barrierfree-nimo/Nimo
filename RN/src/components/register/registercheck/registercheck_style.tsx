import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const RegisterStyle = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: 'center',
    alignItems: "center"
  },
  container_notice: {
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 50
  },
  container_title: {
    marginBottom: 40
  },
  container_title_row: {
    flexDirection: "row",
  },
  title_yellow: {
    fontSize: 40,
    fontWeight: "900",
    color: "#FFD74B",
  },
  title_blue: {
    fontSize: 40,
    fontWeight: "900",
    color: "#00284E",
  },
  container_contents: {
    alignContent: 'center'
  },
  text_contents: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "200",
    color: "#00284E",
    lineHeight: 30,
  },
  container_btn: {
    justifyContent: 'center',
  },
  btn_yes: {
    width: SCREEN_WIDTH - 140,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#00284E',
  },
  btn_no: {
    width: SCREEN_WIDTH - 140,
    paddingVertical: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: "#00284E"
  },
  btn_text_yes: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: "bold"
  },
  btn_text_no: {
    color: '#00284E',
    fontSize: 22,
    fontWeight: "bold"
  },
})

export default RegisterStyle;