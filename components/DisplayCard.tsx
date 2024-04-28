import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayCard = ({ children }) => {
    return (
        <View className="bg-white p-4 rounded-lg shadow-lg">
            {children}
        </View>
    );
};

export default DisplayCard;