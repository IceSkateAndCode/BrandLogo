import colors from "@/styles/colors";
import { Text } from "@react-navigation/elements";
import { usePathname } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ButtonComp from "./ButtonComp";

function getTitleFromPath(pathname: string){
  if(pathname==='/enhancing')
    return 'Enhancing';
  if(pathname==='/strengths')
    return 'Strengths';
  return 'Overview';
}
function logOut(){
  console.log("Logging Out")
}

export default function AppHeader() {
  const pathname = usePathname();
  const title = getTitleFromPath(pathname);

  return <View style={styles.container}>
    <View style={styles.leftContainer}>
      <Image style={styles.imageStyle}
          source={require("../assets/images/logo.png")}/>
      <View style={styles.screenTextContainer}>  
        <Text style={styles.screenTextStyle}>{title}</Text>
      </View>
    </View>
    <View style={styles.rightContainer}>
      <ButtonComp title="Log Out" onPress={logOut} />
      <Text style = {styles.nameTextStyle}>Astra Magic Systems</Text>
    </View>  
  </View>;
}
const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 25,
  },
  leftContainer: {
    backgroundColor: colors.primary,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  rightContainer: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  screenTextContainer: {
    paddingLeft: 15,
    paddingTop: 15
  },
  imageStyle: {
    width: 45,
    height: 45,
  },
  screenTextStyle: {
    fontFamily: 'Metamorphous',
    color: colors.text.dark,
    fontSize: 16
  },
  nameTextStyle: {
    fontFamily: 'Jacquard24',
    fontSize: 24,
    color: colors.secondary
  }
});
