import { StyleSheet, Dimensions } from "react-native";
import CommonStyle from "../common/common_style";

const SCREEN_WIDTH = Dimensions.get("window").width

const LoginStyle = StyleSheet.create({  
  container_login_title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text_login: {
    color: '#FFFFFF', 
    fontSize: 50,
  },
  container_login_img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_login: {
    width: 150,
    height: 150
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
    backgroundColor: 'orange',
    fontSize: 20,
  },
  btn_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'coral',
  },
  btn_register: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'grey',
  },
  btnText_login: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500"
  },
})

export default LoginStyle;