import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const NameScreen = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-start items-center min-h-[85vh] px-4'>
          <Text>NameScreen</Text>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default NameScreen

const styles = StyleSheet.create({})