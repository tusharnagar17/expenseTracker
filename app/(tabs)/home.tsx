import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HomeTransaction from '@/components/HomeTransaction'
import HomeOverview from '@/components/HomeOverview'
import HomeHeader from '@/components/HomeHeader'


export default function Home() {

  

  return (
    <ScrollView style={{flex: 1, marginTop: 60, margin: 10 }}>
      <HomeHeader />
      {/* HomeOverview Section */}
      <HomeOverview />
      
      {/* AllTrasactions Section */}
      <HomeTransaction />
      <StatusBar style="auto" translucent={true} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Overview: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
    margin: 10,
    borderWidth: 2
  }
})