import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView>
      {/* Email */}
      <View>
        <Text>Change Email:</Text>
        <TextInput />
      </View>

      {/* Passowrd Change */}
      <View>
        <Text>Change Email:</Text>
        <TextInput />
      </View>
    </SafeAreaView>
  );
}
