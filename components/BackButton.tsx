import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const BackButton = () => {
	const handleGoBack = () => {
		if (router.canGoBack()) {
			router.back();
		}
	};

	return (
		<TouchableOpacity
			onPress={handleGoBack}
			className='absolute top-5 left-5 bg-secondary rounded-2xl h-10 flex flex-row justify-center items-center'
		>
			<Ionicons name='chevron-back' size={24} color='white' />
			<Text className='text-primary pr-2'>Go Back</Text>
		</TouchableOpacity>
	);
};

export default BackButton;
