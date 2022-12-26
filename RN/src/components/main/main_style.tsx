import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

const MainStyle  = StyleSheet.create({
  btn_tutorial: {
    width: SCREEN_WIDTH,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  btnText_tutorial: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  title_main: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  container_progress: {
    flex: 1,
    width: SCREEN_WIDTH - 10,
    marginTop: 20,
    padding: 20,
    borderColor: '#FFFFFF',
    borderWidth: 0.7,
    borderRadius: 20
  },
  container_progress_detail: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  img_progress: {
    width: 80,
    height: 80,
  },
  container_progress_text: {
    alignItems: 'center',
  },
  text_progress: {
    color: '#FFFFFF',
    fontSize: 23,
    marginLeft: 10
  },
  text_progress_percent: {
    color: '#FFFFFF',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold'
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
    backgroundColor: '#FFD542',
  },
  btnText_menu: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default MainStyle;