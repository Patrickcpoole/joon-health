import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import DisplayCard from '../../components/DisplayCard';
import { useForm } from '../contexts/FormContext';

const DashboardScreen = () => {

  const { formState, updateField } = useForm();
  return (
    <SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<Text className='text-2xl font-bold'>Dashboard</Text>
          <DisplayCard>
            <Text>Name: {formState.name}</Text>
            <Text>Gender: {formState.gender}</Text>
            <Text>Children: {formState.children.join('')}</Text>
            <Text>Email: {formState.email}</Text>
            <Text>Password: {formState.password}</Text>
          </DisplayCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen