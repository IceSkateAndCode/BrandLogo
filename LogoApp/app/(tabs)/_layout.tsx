import Auth from "@/components/Auth";
import { useAuth } from "@/components/AuthProvider";
import colors from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import "../../assets/fonts/Jacquard24-Regular.ttf";
import AppHeader from "../../components/AppHeader";

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
  const { session } = useAuth();


  // If session becomes null while inside tabs, render Auth in-place (no navigation)
  // If session is null while inside the tabs navigator, render the Auth
  // form in-place instead of attempting to force a navigation back to `/`.
  // This keeps the app state intact and avoids brittle cross-navigator calls.
  if (session === null) {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader />
        <Auth />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
    <AppHeader />
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.medgrey,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.background.light,
        tabBarStyle: {
          backgroundColor: colors.background.dark,
        },
      }}
    >
      <Tabs.Screen
        name="characters"
        options={{
          headerTitle: "Characters",
          title: "Characters",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="characterCreator"
        options={{
          headerTitle: "Create a Character",
          title: "Create a Character",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Overview",
          title: "Overview",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="strengths"
        options={{
          headerTitle: "Strengths",
          title: "Strengths",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "barbell" : "barbell-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="enhancing"
        options={{
          headerTitle: "Enhancing",
          title: "Enhancing",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "arrow-up-circle" : "arrow-up-circle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
    </View>
  );
}
