import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Settings",
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen name='details' /> */}
      {/* <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
