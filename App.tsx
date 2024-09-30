import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Notification from './Notification'
import NotificationServices from './NotificationServices'

const App = () => {
  useEffect(() => {
    Notification()
    NotificationServices()
  }, [])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App