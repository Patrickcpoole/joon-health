import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import { router } from 'expo-router';

import { useForm } from '../contexts/FormContext';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const ChildrenScreen = () => {
	const { formState, updateField } = useForm();
	const [inputChild, setInputChild] =  useState('')

	const handleAddChild = () => {
		// Prevent adding duplicate children names
		if (!formState.children.includes(inputChild)) {
				const updatedChildren = [...formState.children, inputChild];
				updateField('children', updatedChildren);
				setInputChild('');
		}
};

const handleRemoveChild = (child: string) => {
		const updatedChildren = formState.children.filter(c => c !== child);
		updateField('children', updatedChildren);
};

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<BackButton/>
					<Text className='text-2xl font-bold'>Add your children</Text>
					<FormField
						otherStyles='mt-4'
						placeholder='ex. John Smith jr'
						handleChangeText={(text) => setInputChild(text)}
						value={inputChild}
					/>
					<View className='flex justify-center items-center w-full'>
						{formState.children.map(child => (
							<CustomButton 
							key={child}
							title={child}
							handlePress={() => handleRemoveChild(child)}
							containerStyles='mt-7 bg-accent px-8'
							textStyles='text-primary ml-2'
							iconName='closecircleo'
							iconSize={24}
							iconColor='#FFFFFF'
							/>
						))}
					</View>
					<CustomButton
						title='Add Child'
						handlePress={handleAddChild}
						containerStyles='w-full mt-7 bg-white border border-accent'
						textStyles='text-accent ml-2'
						iconName='pluscircleo'
						iconSize={24}
						iconColor='#147953'
					/>
					<CustomButton
						title="Next"
						handlePress={() => router.push('/screens/CreateAccountScreen')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ChildrenScreen;
