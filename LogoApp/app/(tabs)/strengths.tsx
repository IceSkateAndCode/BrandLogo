import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StrengthsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}> Each element is strong against two others: {'\n'}
        Fire is strong against life and shadow. {'\n'}
        Water is strong against fire and metal {'\n'}
        Light is strong against shadow and sound {'\n'}
        Shadow is strong agianst electricity and light {'\n'}
        Electricity is strong against water and sound {'\n'}
        Sound is strong agianst metal and electricity {'\n'}
        Metal is strong against life and fire {'\n'}
        Life is strong against water and light
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