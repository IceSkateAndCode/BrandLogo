import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Jacquard24': require('../assets/fonts/Jacquard24-Regular.ttf'),
    'Metamorphous': require('../assets/fonts/Metamorphous-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return( 
    <>
      <StatusBar style="light" />
      <Slot />; 
    </>
  );
}