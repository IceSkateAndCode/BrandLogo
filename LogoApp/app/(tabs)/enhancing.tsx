import colors from "@/styles/colors";
import React from "react";
import { Text, View } from "react-native";

export default function EnhancingScreen() {
  return (
    <View style={{backgroundColor:colors.background.light}}>
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
    </View>
  );
}