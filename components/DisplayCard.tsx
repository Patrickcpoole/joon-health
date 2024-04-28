import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface DisplayCardProps {
	children: ReactNode;
}

const DisplayCard = ({ children }: DisplayCardProps) => {
	return (
		<View className='bg-white p-4 rounded-lg shadow-lg px-12 py-12'>
			{children}
		</View>
	);
};

export default DisplayCard;
