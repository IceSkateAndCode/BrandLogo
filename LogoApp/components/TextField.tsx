import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
/*
This component is similar to the TextInput but allows
the user to pass in a state var and its update function
*/

type propsType = {
  placeholder: string;
  placeholderTextColor?: string;
  borderColor?: string;
  value: string; // The current value of the TextField
  onChangeText: (newValue: string) => void; // The function to update the value
};

const TextField: React.FC<propsType> = ({
  placeholder,
  placeholderTextColor = colors.medgrey,
  borderColor = colors.primary,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, { borderColor: borderColor }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    width: 300,
    height: 40,
    marginVertical: 5,
    borderWidth: 2,
    fontSize: 16,
    color: colors.text.light,
    borderRadius: 5,
    backgroundColor: colors.secondary
  }
});
