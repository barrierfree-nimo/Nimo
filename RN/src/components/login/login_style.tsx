import { StyleSheet, Dimensions } from "react-native";
import CommonStyle from "../common/common_style";

const SCREEN_WIDTH = Dimensions.get("window").width

const LoginStyle = StyleSheet.create({  
  container_login_title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  text_title: {
    color: '#FFD542', 
    fontSize: 40,
    fontWeight: 'bold'
  },
  text_login: {
    color: '#FFFFFF', 
    fontSize: 50,
    fontWeight: 'bold'
  },
  container_login_img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_login: {
    width: 150,
    height: 150,
  },
  container_login_input: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    fontSize: 24,
  },
  btn_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#FFD542',
  },
  btn_register: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'orange',
  },
  btnText_login: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold'
  },
})

export default LoginStyle;