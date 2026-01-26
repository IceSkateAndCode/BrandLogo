import colors from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import "../../assets/fonts/Jacquard24-Regular.ttf";
import AppHeader from "../../components/AppHeader";

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
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
