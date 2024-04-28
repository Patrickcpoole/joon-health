import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ButtonGroupSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (option) => {
    setSelectedOption(option);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, selectedOption === item.id && styles.selected]}
      onPress={() => handlePress(item.id)}
    >
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  

  return (
    <FlatList
      data={selectedOptions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true} // Set to false if you want vertical list
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#DDD',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  selected: {
    backgroundColor: '#007BFF',
    color: '#FFF',
  },
});

export default GenderSelector;
