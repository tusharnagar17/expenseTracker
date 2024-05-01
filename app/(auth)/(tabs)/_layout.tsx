import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Icons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        // tabBarStyle: {
        //   height: 60,
        //   // borderWidth: 1,
        //   // borderRadius: 10,
        //   // borderColor: "orange",
        //   // borderTopColor: "orange",
        //   // backgroundColor: "orange",
        // },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color="rgba(0,0,0,0.8)" />
          ),
        }}
      />
      <Tabs.Screen
        name="addItem"
        options={{
          title: "Add new expense",
          headerTitleAlign: "center",

          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={30} color="rgba(0,0,0,0.8)" />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={30} color="rgba(0,0,0,0.8)" />
          ),
        }}
      />
    </Tabs>
  );
}
