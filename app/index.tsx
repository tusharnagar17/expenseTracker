import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const HomePage = () => {
  return (
    <Redirect href='/addItem' />
  )
}

export default HomePage