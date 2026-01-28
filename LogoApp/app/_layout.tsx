import { AuthProvider } from "@/components/AuthProvider";
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

  // Wrap the entire app in AuthProvider so auth state is available everywhere.
  // This prevents multiple, scattered onAuthStateChange listeners and ensures
  // a single source of truth for session state that drives UI declaratively.
  return( 
    <AuthProvider>
      <StatusBar style="light" />
      <Slot />; 
    </AuthProvider>
  );
}