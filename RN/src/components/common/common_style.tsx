import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00284E'
  },  
  container_header: {
    width: SCREEN_WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  container_exit: {
    width: SCREEN_WIDTH - 80,
    height: 50,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'coral'
  },
  btnText_exit: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default CommonStyle;