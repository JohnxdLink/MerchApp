import { View, Text } from 'react-native'
import React from 'react'
import { customHeaderStyle } from '../styles/CustomHeaderStyle'


export default function CustomHeader() {
  return (
    <View style={customHeaderStyle.test}>
      <Text>CustomHeader</Text>
    </View>
  )
}