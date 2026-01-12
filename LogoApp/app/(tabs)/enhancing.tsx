import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EnhancingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Each element can enhance the strength of one other: {'\n'}
        Fire enhances light {'\n'}
        Light enhances electricity {'\n'}
        Electricity enhances metal {'\n'}
        Metal enhances water {'\n'}
        Water enhances shadow {'\n'}
        Shadow enhances sound {'\n'}
        Sound enhances earth {'\n'}
        Earth enhances fire
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  }
})