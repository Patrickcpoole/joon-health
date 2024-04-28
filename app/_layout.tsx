import React from 'react';
import { Stack } from 'expo-router';
import { FormProvider } from './contexts/FormContext';

const RootLayout = () => {
	return (
		<FormProvider>
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen
					name='screens/NameScreen'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='screens/GenderScreen'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='screens/ChildrenScreen'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='screens/CreateAccountScreen'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='screens/DashboardScreen'
					options={{ headerShown: false }}
				/>
			</Stack>
		</FormProvider>
	);
};

export default RootLayout;
