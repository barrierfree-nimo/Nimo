import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

const MainStyle  = StyleSheet.create({
  btn_tutorial: {
    width: SCREEN_WIDTH,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  btnText_tutorial: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500"
  },
  title_main: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  container_progress: {
    flex: 1,
    width: SCREEN_WIDTH,
    marginTop: 20,
    padding: 20,
    backgroundColor: 'gray'
  },
  container_progress_detail: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  img_progress: {
    width: 100,
    height: 100,
  },
  text_progress: {
    color: '#FFFFFF',
    fontSize: 23,
    marginLeft: 10
  },
  container_menu: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  btn_menu: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'orange',
  },
  btnText_menu: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: "500"
  }
})

export default MainStyle;