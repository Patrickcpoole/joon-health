import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useForm } from '../contexts/FormContext';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const NameScreen = () => {
	const { formState, updateField } = useForm();

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<BackButton />
					<Text className='text-2xl font-bold'>What is your name?</Text>
					<FormField
						otherStyles='mt-4'
						placeholder='ex. John Smith'
						handleChangeText={(text) => updateField('name', text)}
						value={formState.name}
					/>

					<CustomButton
						title="Next"
						handlePress={() => router.push('/screens/GenderScreen')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default NameScreen;
