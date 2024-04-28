import React from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

interface Option {
	id: string;
	label: string;
}

interface ButtonGroupSelectorProps {
	options: Option[];
	handleSelectButton: (option: Option) => void;
	selected: string;
}

const ButtonGroupSelector = ({
	options,
	handleSelectButton,
	selected,
}: ButtonGroupSelectorProps) => {
	const renderButton = ({ option }: { option: Option }) => {
		const toggledStyles = {
			button: 'bg-accent',
			text: 'text-primary',
		};

		const buttonStyle = option.id === selected ? toggledStyles.button : null;
		const textStyle = option.id === selected ? toggledStyles.text : null;

		return (
			<TouchableOpacity
				key={option.id}
				className={`flex justify-center items-center bg-[#c8d7e6] 
      p-4 m-4 rounded-2xl w-[25%]  text-black ${buttonStyle}`}
				onPress={() => handleSelectButton(option)}
			>
				<Text className={`text-text text-lg ${textStyle}`}>{option.label}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View className='flex w-full flex-row'>
			{options.map((option) => renderButton({ option }))}
		</View>
	);
};

export default ButtonGroupSelector;
