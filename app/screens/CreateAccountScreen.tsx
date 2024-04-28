import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useForm } from '../contexts/FormContext';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {

  const { formState, updateField } = useForm();

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4 '>
					<Text className='text-2xl font-bold'>Create Your Account</Text>
					<FormField
						otherStyles='mt-4'
						textStyles='ml-4'
						placeholder='Email'
						handleChangeText={(text) => updateField('email', text)}
						value={formState.email}
						label='Email'
						leftIcon={{color: '#147953', size: 24, name: 'mail'}}
					/>
					<FormField
						otherStyles='mt-4'
						textStyles='ml-4'
						placeholder='Password'
						handleChangeText={(text) => updateField('password', text)}
						value={formState.password}
						label='Password'
						leftIcon={{color: '#147953', size: 24, name: 'lock'}}
						rightIcon={{color: '#147953', size: 24, name: 'eye'}}
					/>
					<CustomButton
						title="Create Account"
						handlePress={() => router.push('/screens/DashboardScreen')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUpScreen;