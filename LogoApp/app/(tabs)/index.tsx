import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>There are 8 different elements of magic.
        Each is strong and weak against different elements.  Every element can enhance
        the power of another, in a circle.  The elements are fire, light, electricity, metal,
        water, shadow, sound, and life.  Every element has an opposing element, located
        opposite to it in the circle of elements.
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