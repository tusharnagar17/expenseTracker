import { View, Text } from 'react-native'
import React from 'react'


const HomeText = () => {
    return (
      <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 2 }}>
              <View><Text>$ICON</Text></View>
              <View>
                <Text>Income</Text>
                <Text>$INCOME</Text>
              </View>
      </View>
    )
  }

export default function HomeOverview() {
  return (
    <View style={{  borderWidth: 2, padding: 2}}>
        <View>
          <Text style={{textAlign: "center"}}>Total Balance</Text>
          <Text style={{textAlign: "center"}}>$BALANCE</Text>
        </View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
          <HomeText />
          <HomeText />
        </View>
    </View>
  )
}