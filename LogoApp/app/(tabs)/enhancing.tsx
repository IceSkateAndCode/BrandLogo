import colors from "@/styles/colors";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EnhancingScreen() {
  return (
    <SafeAreaView style={{backgroundColor:colors.background.light}}>
      <Text style={{color:colors.text.light}}>Each element can enhance the strength of one other:
        Fire enhances light
        Light enhances electricity
        Electricity enhances metal
        Metal enhances water
        Water enhances shadow
        Shadow enhances sound
        Sound enhances earth
        Earth enhances fire
      </Text>
    </SafeAreaView>
  );
}