import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const LoginStyle = StyleSheet.create({  
  container_login_title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  text_title: {
    color: '#00284E', 
    fontSize: 40,
    fontWeight: 'bold'
  },
  text_login: {
    color: '#FFD542', 
    fontSize: 50,
    fontWeight: 'bold'
  },
  
  container: {
    flex: 1,
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginHorizontal: 20,
  },

  container_login_input: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 24,
  },
  container_login_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  btn_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#00284E',
  },
  btn_register: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#000000',
  },
  btnText_login: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
})

export default LoginStyle;