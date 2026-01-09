import colors from "@/styles/colors";
import { Text } from "@react-navigation/elements";
import { Image, StyleSheet, View } from "react-native";


export default function AppHeader() {
  return <View style={styles.container}>
    <Image style={styles.imageStyle}
        source={require("../../assets/images/logo.png")}/>
    <Text style={styles.screenTextStyle}>test</Text>
    <Text style = {styles.nameTextStyle}>Astra Magic Systems</Text>
  </View>;
}
const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: colors.primary,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: -100,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  screenTextStyle: {
    color: colors.text.dark
  },
  nameTextStyle: {
    fontFamily: 'Jacquard24',
    color: colors.secondary
  }
});
