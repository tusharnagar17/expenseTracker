import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient"
import { Link, router } from 'expo-router'
import auth from "@react-native-firebase/auth"
import db from '@react-native-firebase/database'

interface HomeData {
  name: string,
  icon: string,
  money: number
}


export default function HomeOverview() {

  // THings to save
  //  Personal Details = 
  //  total balance = Income - expense
  // pesonal.income
  //  personal.expense total of all expense done till now filter from db. and add 

  const tempData: HomeData = {
    name: "Income",
    icon: "Income",
    money: 2000
  }
  const expData: HomeData = {
    name: "expense",
    icon: "expense",
    money: 5000
  }
  const TotalBalanceSectionClicked = () => {
    router.push('/')
  }
  
  return (
    <LinearGradient colors={["rgba(27,163,231,255)","rgba(130,117,247,255)","rgba(230,92,209,255)", "rgba(255,129,103,255)"]} 
      start={{x: 0, y: 0}} end={{x:1, y:1}}
    style={{  borderWidth: 0.5, paddingVertical: 30, 
      borderRadius: 30, margin: 5
    }}>
      <TouchableOpacity onPress={TotalBalanceSectionClicked}>

        <View>
          <Text style={{textAlign: "center", color: "white" , fontSize: 18, fontWeight: "700"}}>Total Balance</Text>
          <Text style={{textAlign: "center", color: "white", fontSize: 36, fontWeight: "900" , paddingVertical: 4}}>$BALANCE</Text>
        </View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
          <HomeText data={tempData} />
          <HomeText data={expData} />
        </View>
        </TouchableOpacity>
    </LinearGradient>
  )
}

const HomeText = ({data}: HomeData) => {
  return (
    <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
            <View><Text>{data.icon}</Text></View>
            <View>
              <Text style={{fontSize: 18, color: "white", fontWeight: "700"}}>{data.name}</Text>
              <Text style={{fontSize: 18, color: "white", fontWeight: "700"}}>{data.money}</Text>
            </View>
    </View>
  )
}