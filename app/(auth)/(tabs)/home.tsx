import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeTransaction from "@/components/HomeTransaction";
import HomeOverview from "@/components/HomeOverview";
import HomeHeader from "@/components/HomeHeader";
import { fetchProfileData, fetchSessionFirst } from "@/services/database";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  fetchSessionFirst();
  fetchProfileData();

  const handleRefresh = () => {
    setRefreshing(true);
    fetchSessionFirst();
    fetchProfileData();
    setRefreshing(false);
  };

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{ flex: 1, marginTop: 60, margin: 10 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <HomeHeader />
      {/* HomeOverview Section */}
      <HomeOverview />

      {/* AllTrasactions Section */}
      <HomeTransaction />
      <StatusBar style="auto" translucent={true} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Overview: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
    margin: 10,
    borderWidth: 2,
  },
});
