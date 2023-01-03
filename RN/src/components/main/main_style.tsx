import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

const MainStyle  = StyleSheet.create({
  container_progress: {
    flex: 1,
    width: SCREEN_WIDTH - 60,
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#D8EBF9",
  },
  container_progress_detail: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  img_progress: {
    width: 50,
    height: 110
  },
  container_progress_text: {
    alignItems: 'center',
  },
  text_progress: {
    color: '#00284E',
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '900'
  },
  text_progress_percent: {
    color: '#00284E',
    fontSize: 34,
    marginLeft: 5,
    fontWeight: '900'
  },
  container_menu: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  btn_menu_tutorial: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 6,
  },
  btnText_menu_tutorial: {
    color: '#00284E',
    fontSize: 25,
    fontWeight: 'bold'
  },
  btn_menu: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#00284E',
  },
  btnText_menu: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default MainStyle;