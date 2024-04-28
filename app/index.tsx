import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/joon-logo.webp';
import CustomButton from '../components/CustomButton';

export default function App() {
	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className='w-full justify-start items-center min-h-[85vh] px-4'>
					<Image
						source={Logo}
						className='w-[100%] h-[30%]'
						resizeMode='contain'
					/>
					<Text className='text-3xl'>Welcome to Joon Health!</Text>
					<CustomButton
						title="Let's get started!"
						handlePress={() => router.push('/screens/NameScreen')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
