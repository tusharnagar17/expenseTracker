import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function profile() {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>profile</Text>
      </View>
    </SafeAreaView>
  );
}
