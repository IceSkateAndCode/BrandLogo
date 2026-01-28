import colors from "@/styles/colors";
import Checkbox from 'expo-checkbox';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, AppState, AppStateStatus, StyleSheet, Text, View } from "react-native";
import Button from "../components/ButtonComp";
import TextField from "../components/TextField";
import { supabase } from "../utils/supabase";

/*
  Auth component responsibilities:
  - Collect email + password
  - Call Supabase auth methods
  - NOT handle navigation
  - NOT store session state
*/
export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [showPassword, setShowPassword] = useState(false);

  /*
    Supabase uses background token refresh.
    We start/stop it based on app state.
  */
  useEffect(() => {
    const handleAppStateChange = (nextState: AppStateStatus) => {
      if (nextState === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        try {
          supabase.auth.stopAutoRefresh();
        } catch {}
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    if (AppState.currentState === "active") {
      supabase.auth.startAutoRefresh();
    }

    return () => {
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
      try {
        supabase.auth.stopAutoRefresh();
      } catch {}
    };
  }, []);

   async function signInWithEmail() {
    console.log('starting supabase log in')
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    console.log('supabase logged in')
  }

  async function signUpWithEmail() {
    console.log('starting supabase sign up')
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    console.log('supabase signed up')
  }

  const hiddenPassword = () => {
    const passLen = password.length;
    let hide = "";
    for(let i=0; i<passLen; i++){
        hide += "*";
    };
    const hidden = hide;
    return hidden
  }

  async function logIn() {
    console.log('starting log in')
    if (email === "" || password === "") {
      alert("Please enter email and password")
    }
    else if(password.length<6){
        alert("Password must be at least 6 characters")
    } 
    else if(!(password.includes('1') || password.includes('2') || password.includes('3')
    || password.includes('4')|| password.includes('5')|| password.includes('6')|| password.includes('7')
    || password.includes('8')|| password.includes('9')|| password.includes('0'))){
        alert("Password must contain a number")
    }
    else {
      console.log('values valid')
      signInWithEmail()
    };
  };
  async function signUp() {
    console.log('starting sign up')
    if (email === "" || password === "") {
      alert("Please enter email and password")
    }
    else if(password.length<6){
        alert("Password must be at least 6 characters")
    } 
    else if(!(password.includes('1') || password.includes('2') || password.includes('3')
    || password.includes('4')|| password.includes('5')|| password.includes('6')|| password.includes('7')
    || password.includes('8')|| password.includes('9')|| password.includes('0'))){
        alert("Password must contain a number")
    }
    else {
      console.log('values valid')
      signUpWithEmail()
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

      <Button title="Log In" onPress={logIn} />
      <Button title="Sign Up" onPress={signUp} />
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