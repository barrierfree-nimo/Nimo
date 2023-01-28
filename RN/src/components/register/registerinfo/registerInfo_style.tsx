import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const RegisterInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: "center",
  },
  container_notice: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  text_notice: {
    fontSize: 18,
    textAlign: "left",
    lineHeight: 27
  },
  container_info: {
    width: "100%",
    paddingHorizontal: 30,
  },
  container_info_row: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  container_info_col: {

  },
  text_input_title: {
    minWidth: 130,
    paddingVertical: 15,
    textAlign: "left",
    textAlignVertical: "center",
    color: '#00284E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput_name: {
    width: SCREEN_WIDTH - 200,
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  textInput_bank: {
    width: SCREEN_WIDTH - 200,
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  container_checkbox_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container_checkbox: {
    flexDirection: "row",
    marginRight: 35,
  },
  container_checkbox_interest_main: {
    paddingHorizontal: 20
  },
  container_checkbox_interest_sub: {
    flexDirection: "row",
  },
  container_checkbox_interest: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
  },
  checkbox: {
    width: 25,
    height: 25
  },
  text_checkbox_title: {
    textAlign: 'center',
    textAlignVertical: "center",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "500"
  },
  container_btn: {
    justifyContent: 'center',
    alignItems: "center"
  },
  btn_fin: {
    width: SCREEN_WIDTH - 60,
    paddingVertical: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#00284E',
  },
  text_btn_fin: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFFFFF"
  },
  btn_skip: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    marginBottom: 10,
    alignItems: "center",
  },
  text_btn_skip: {
    fontSize: 17,
    fontWeight: "500",
    color: '#00284E'
  }
});

export default RegisterInfoStyle;