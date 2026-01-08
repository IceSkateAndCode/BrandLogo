import colors from "@/styles/colors";
import React from "react";
import { Text, View } from "react-native";

export default function StrengthsScreen() {
  return (
    <View style={{backgroundColor:colors.background.light}}>
      <Text style={{color:colors.text.light}}> Each element is strong against two others:
        Fire is strong against life and shadow.
        Water is strong against fire and metal
        Light is strong against shadow and sound
        Shadow is strong agianst electricity and light 
        Electricity is strong against water and sound
        Sound is strong agianst metal and electricity
        Metal is strong against life and fire
        Life is strong against water and light

      </Text>
    </View>
  );
}