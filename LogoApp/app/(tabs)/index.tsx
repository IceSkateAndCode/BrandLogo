import colors from "@/styles/colors";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OverviewScreen() {
  return (
    <SafeAreaView style={{backgroundColor:colors.background.light}}>
      <Text style={{color:colors.text.light}}>There are 8 different elements of magic.
        Each is strong and weak against different elements.  Every element can enhance
        the power of another, in a circle.  The elements are fire, light, electricity, metal,
        water, shadow, sound, and life.  Every element has an opposing element, located
        opposite to it in the circle of elements.
      </Text>
    </SafeAreaView>
  );
}