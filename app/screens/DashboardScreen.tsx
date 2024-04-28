import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import DisplayCard from '../../components/DisplayCard';
import CustomButton from '../../components/CustomButton';
import { useForm } from '../contexts/FormContext';

const DashboardScreen = () => {
	const { formState, resetForm } = useForm();

  const handleStartOver = () => {
    resetForm();
    router.push('/')
  }

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<Text className='text-2xl font-bold mb-4'>Dashboard</Text>
					<DisplayCard>
						<Text className='text-lg'>Name: {formState.name}</Text>
						<Text className='text-lg'>Gender: {formState.gender}</Text>
						<Text className='text-lg'>
							Children: {formState.children.join('')}
						</Text>
						<Text className='text-lg'>Email: {formState.email}</Text>
						<Text className='text-lg'>Password: {formState.password}</Text>
						
					</DisplayCard>
          <View className='flex justify-center items-center w-full bg-red'>
							<CustomButton
								title='Start Over'
								handlePress={handleStartOver}
								containerStyles='w-full justify-center items-center mt-7 px-8'
							/>
						</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default DashboardScreen;
