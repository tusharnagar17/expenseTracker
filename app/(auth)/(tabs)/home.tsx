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
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

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
      style={{
        flex: 1,
        marginTop: 60,
        position: "relative",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      {/* <LinearGradient
        colors={["rgba(255,129,103,0.1)", "rgba(255,129,103,0.05)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          backgroundColor: "rgba(255, 137, 0,0.1)",
          height: "100%",
          width: "100%",
        }}
      ></LinearGradient> */}
      <View style={{ margin: 10 }}>
        <HomeHeader />
        {/* HomeOverview Section */}
        <HomeOverview />

        {/* AllTrasactions Section */}
        <HomeTransaction />
      </View>
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
