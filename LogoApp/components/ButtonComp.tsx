import colors from '@/styles/colors'
import { Text } from '@react-navigation/elements'
import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

type propsType = {
    title: string;
    onPress: () => void;
    color?: string;
    textColor?: string;
    underlayColor?: string;
}
const ButtonComp: React.FC<propsType> = ({
    title,
    onPress,
    color=colors.primary,
    textColor=colors.text.dark,
    underlayColor=colors.secondary
}) => {
  return (
    <View>
      <TouchableHighlight
      style={[styles.buttonContainer, { backgroundColor: color }]}
      onPress={onPress}
      underlayColor={underlayColor}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableHighlight>
    </View>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  buttonContainer: {
    height: 30,
    width: 120,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.darkgrey,
    justifyContent: "center",
    alignItems: "center",
    //marginStart: 10,
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});