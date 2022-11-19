import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const RegisterStyle = StyleSheet.create({
  container_notice: {
    flex: 1.5,
    marginTop: 50,
  },
  container_btn: {
    flex: 1,
    justifyContent: 'center',
  },
  notice_title: {
    marginVertical: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  notice_content1: {
    marginTop: 10,
    fontSize: 24,
    color: 'white'
  },
  notice_content2: {
    marginTop: 40,
    fontSize: 20,
    color: 'white'
  },
  btn_registerCheck: {
    width: SCREEN_WIDTH - 150,
    height: 70,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'orange',
  },
  btnText_registerCheck: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: "bold"
  },
})

export default RegisterStyle;