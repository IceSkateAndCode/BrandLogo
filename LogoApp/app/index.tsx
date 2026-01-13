import colors from "@/styles/colors";
import { Checkbox } from 'expo-checkbox';
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/ButtonComp";
import TextField from "../components/TextField";

export default function IndexScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const hiddenPassword = () => {
    const passLen = password.length;
    let hide = "";
    for(let i=0; i<passLen; i++){
        hide += "*";
    };
    const hidden = hide;
    return hidden
  }

  const openTabNav = () => {
    if (name != "" && password != "") {
      setName(name);
      router.push({ pathname: "/(tabs)", params: { name, password } });
    } 
    else alert("Please enter your name and password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <TextField placeholder="Name" value={name} onChangeText={setName} />
      <Checkbox 
        style={styles.checkbox}
        value={showPassword}
        onValueChange={setShowPassword}
        color={showPassword?colors.primary:colors.medgrey}
      />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Continue" onPress={openTabNav} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.background.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.dark,
    marginBottom: 20,
  },
  checkbox: {
    margin: 8,
  },
});
