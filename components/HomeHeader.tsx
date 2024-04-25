import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import auth from "@react-native-firebase/auth"
import db from "@react-native-firebase/database"
import { Ionicons } from '@expo/vector-icons'

export default function HomeHeader() {
    const user = "tushar";
    function settingBtn() {
        // console.log("Tushar Nagar")
        router.push("/setting")
      }
  return (
    <View style={{marginVertical: 10}}>
        <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <View style={{flex:1 , flexDirection: "row", gap: 5}}>
            <Text style={{fontSize: 18}}>Welcome!</Text>
            <Text style={{fontSize: 18, fontWeight: "500"}}>{user}</Text></View>
          
          <View><TouchableOpacity style={{ padding: 2}} onPress={settingBtn}><Ionicons name='settings-outline' size={25} /></TouchableOpacity></View>
        </View>
      </View>
  )
}