import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeHeader() {
    function settingBtn() {
        console.log("Tushar Nagar")
      }
  return (
    <View style={{}}>
        <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", alignItems: "baseline"}}>
          <View><Text>Username</Text></View>
          
          <View><TouchableOpacity style={{borderWidth: 2, padding: 2}} onPress={settingBtn}><Text>Setting</Text></TouchableOpacity></View>
        </View>
      </View>
  )
}