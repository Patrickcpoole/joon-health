import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useForm } from '../contexts/FormContext'
import CustomButton from '../../components/CustomButton';
import ButtonGroupSelector from '../../components/ButtonGroupSelector'
import BackButton from '../../components/BackButton';


const genderOptions = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
  { id: 'other', label: 'Other' },
];


const GenderScreen = () => {

	const { formState, updateField } = useForm();

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<BackButton />
					<Text className='text-2xl font-bold'>What is your gender?</Text>
          <ButtonGroupSelector 
            options={genderOptions}
						handleSelectButton={(item) => updateField('gender', item.id)}
						selected={formState.gender}
          />
					<CustomButton
						title="Next"
						handlePress={() => router.push('/screens/ChildrenScreen')}
						containerStyles='w-full'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default GenderScreen;
