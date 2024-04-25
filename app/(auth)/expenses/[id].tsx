import { useLocalSearchParams } from "expo-router";

import { View, Text } from 'react-native'
import React from 'react'

export default function ExpenseSection() {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>this is local search param id : {id}</Text>
    </View>
  )
}