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
    color: colors.text.light
  },

  title: {
    fontFamily: 'Jacquard24',
    fontSize: 36,
    color: colors.primary
  },
})

export default defaultStyles;
