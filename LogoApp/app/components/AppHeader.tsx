import colors from "@/styles/colors";
import { Text } from "@react-navigation/elements";
import { Image, StyleSheet, View } from "react-native";


export default function AppHeader() {
  return <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Image style={styles.imageStyle}
          source={require("../../assets/images/logo.png")}/>
      <View style={styles.screenTextContainer}>  
        <Text style={styles.screenTextStyle}>ScreenNameHere</Text>
      </View>
    </View>
    <View>
      <Text style = {styles.nameTextStyle}>Astra Magic Systems</Text>
    </View>  
  </View>;
}
const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 25,
  },
  leftContainer: {
    height: 90,
    backgroundColor: colors.primary,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  screenTextContainer: {
    paddingLeft: 15,
    paddingTop: 5
  },
  imageStyle: {
    width: 35,
    height: 35,
  },
  screenTextStyle: {
    fontFamily: 'Metamorphous',
    color: colors.text.dark,
    fontSize: 13
  },
  nameTextStyle: {
    fontFamily: 'Jacquard24',
    fontSize: 24,
    color: colors.secondary
  }
});
