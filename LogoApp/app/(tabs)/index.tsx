import colors from "@/styles/colors";
import React from "react";
import { Text, View } from "react-native";

export default function OverviewScreen() {
  return (
    <View style={{backgroundColor:colors.background.light}}>
      <Text style={{color:colors.text.light}}>There are 8 different elements of magic.
        Each is strong and weak against different elements.  Every element can enhance
        the power of another, in a circle.  The elements are fire, light, electricity, metal,
        water, shadow, sound, and life.  Every element has an opposing element, located
        opposite to it in the circle of elements.
      </Text>
    </View>
  );
}