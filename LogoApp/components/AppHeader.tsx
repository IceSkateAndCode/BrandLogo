import colors from "@/styles/colors";
import { supabase } from "@/utils/supabase";
import { Text } from "@react-navigation/elements";
import { usePathname } from "expo-router";
import { Alert, Image, StyleSheet, View } from "react-native";
import { useAuth } from "./AuthProvider";
import ButtonComp from "./ButtonComp";

function getTitleFromPath(pathname: string){
  if(pathname==='/enhancing')
    return 'Enhancing';
  if(pathname==='/strengths')
    return 'Strengths';
  if(pathname==='/characterCreator')
    return 'Create a Character';
  if(pathname==='/characters')
    return 'Characters'
  return 'Overview';
}
// Simplified sign out: intentionally NOT performing any navigation here.
  // Rationale: navigation attempts from inside nested navigators (tabs)
  // were unreliable and caused unmatched route or no-op behavior. The
  // app now uses a global AuthProvider and the tabs layout renders the
  // Auth screen in-place when the session becomes null.
  async function logOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        Alert.alert("Logout failed", error.message);
      }
    } catch (err: any) {
      Alert.alert("Logout failed", err?.message ?? String(err));
    }
  }

export default function AppHeader() {
  const pathname = usePathname();
  const title = getTitleFromPath(pathname);
  const { session } = useAuth();

  if (session===null) return;

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
