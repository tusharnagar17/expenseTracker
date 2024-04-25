import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// Icons


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue",  }}>
      
      <Tabs.Screen name="home" 
            options={{title: "Home", headerShown: false, tabBarIcon: ({color}) => (<FontAwesome name='home' size={30} />) }}
        />
      <Tabs.Screen name="addItem" 
            options={{title: "Add new expense", headerTitleAlign: "center" ,tabBarIcon: ({color}) => (<FontAwesome name='plus' size={30} />)}}
        />
         
        <Tabs.Screen name="setting" 
            options={{title: "Setting",headerShown: false, tabBarIcon: ({color}) => (<Ionicons name='settings-outline' size={30} />)}}
        />
    </Tabs>
  )
}