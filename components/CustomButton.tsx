import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


interface CustomButtonProps {
	title: string;
	handlePress: () => void;
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
	iconSize?: number;
	iconName?: string;
	iconColor?: string;
}

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
	iconSize,
	iconName,
	iconColor
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			className={`flex flex-row bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
      ${isLoading ? 'opacity-50' : ''}`}
			activeOpacity={0.7}
			onPress={handlePress}
			disabled={isLoading}
		>
			
			{iconName && <AntDesign name={iconName} size={iconSize} color={iconColor} />}
			<Text className={`text-primary font-roboto text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
