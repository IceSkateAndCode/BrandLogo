import { StyleSheet } from "react-native";
import colors from "./colors";

 const defaultStyles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.background.light,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
  },
  
  textStyle: {
    fontFamily: 'Metamorphous',
    color: colors.text.light,
    textAlign: 'left'
  },

  title: {
    fontFamily: 'Jacquard24',
    fontSize: 36,
    color: colors.primary,
    textAlign: 'center'
  },
})

export default defaultStyles;
