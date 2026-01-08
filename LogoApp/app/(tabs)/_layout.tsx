import colors from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medgrey,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.background.dark,
        tabBarStyle: {
          backgroundColor: colors.background.light,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Overview",
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
  );
}
