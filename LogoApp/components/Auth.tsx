import colors from "@/styles/colors";
import Checkbox from 'expo-checkbox';
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/ButtonComp";
import TextField from "../components/TextField";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("@gmail.com");
  const [password, setPassword] = useState<string>("123456");
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
    if (email === "" || password === "") {
      alert("Please enter email and password")
    }
    else if(password.length<6){
        alert("Password must be at least 6 characters")
    } 
    else if(!(password.includes('1') || password.includes('2') || password.includes('3')
    || password.includes('4') || password.includes('5') || password.includes('6')
    || password.includes('7') || password.includes('8') || password.includes('9') || password.includes('0'))){
        alert("Password must contain a number")
    }
    else {
      setEmail(email);
      router.push({ pathname: "/(tabs)"});
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to the App</Text>
      <TextField placeholder="Username" value={email} onChangeText={setEmail} />

      <View style={styles.checkView}>
      <Text style={styles.text}>Hide Password?</Text>
      <Checkbox 
        style={styles.checkbox}
        value={showPassword}
        onValueChange={setShowPassword}
        color={showPassword?colors.primary:colors.medgrey}
      />
      </View>
      <TextField
        placeholder="Password"
        value={showPassword?hiddenPassword():password}
        onChangeText={setPassword}
      />

      <Button title="Log In" onPress={openTabNav} />
      <Button title="Sign Up" onPress={openTabNav} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.background.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  checkView: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.dark,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colors.text.dark,
  },
  checkbox: {
    margin: 8,
  },
});