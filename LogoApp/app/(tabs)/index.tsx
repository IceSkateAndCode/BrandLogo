import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { supabase } from "@/utils/supabase";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type PeriodCounts = Record<string, number>;

export default function OverviewScreen() {
  /*
  Home Screen
  - Shows how many users are in each class period
  - ALWAYS refreshes when the tab becomes active
*/

  const [counts, setCounts] = useState<PeriodCounts>({});
  const [loading, setLoading] = useState(true);

  const fetchCounts = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("element");

      if (error) {
        console.error("Error fetching counts:", error);
        return;
      }

      const newCounts: PeriodCounts = {};

      for (const row of data ?? []) {
        if (!row.element) continue;
        newCounts[row.element] = (newCounts[row.element] ?? 0) + 1;
      }

      setCounts(newCounts);
    } catch (err) {
      console.error("fetchCounts exception:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔑 THIS is the important part
  useFocusEffect(
    React.useCallback(() => {
      fetchCounts();
    }, [fetchCounts]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: 12, marginTop: -20}}>
        <Text style={defaultStyles.title}>Overview</Text>
      </View>
      <Text style={styles.textStyle}>There are 8 different elements of magic.
        Each is strong and weak against different elements.  Every element can enhance
        the power of another, in a circle.  The elements are fire, light, electricity, metal,
        water, shadow, sound, and life.  Every element has an opposing element, located
        opposite to it in the circle of elements.
      </Text>
      <View style={{marginTop: 36}}>
        <Text style={defaultStyles.title}>Total Characters per Element:</Text>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.countContainer}>
            <Text style={styles.countText}>
              Fire: {counts["Fire"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Water: {counts["Water"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Light: {counts["Light"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Shadow: {counts["Shadow"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Electricity: {counts["Electricity"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Sound: {counts["Sound"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Metal: {counts["Metal"] ?? 0} characters
            </Text>
            <Text style={styles.countText}>
              Life: {counts["Life"] ?? 0} characters
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.background.light,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },
  textStyle: {
    fontFamily: 'Metamorphous',
    color: colors.text.light,
    textAlign: 'left'
  },
  countContainer: {
    fontFamily: 'Metamorphous',
    marginTop: 20,
  },
  countText: {
    fontFamily: 'Metamorphous',
    fontSize: 16,
    marginBottom: 8,
  },
});