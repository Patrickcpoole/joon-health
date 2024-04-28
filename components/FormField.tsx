import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

type Label = string | undefined;

interface CustomFormFieldProps {
  label?: Label;
  placeholder?: string;
  handleChangeText: (text: string) => void; 
  value: string;
  otherStyles?: string;
}



const FormField = ({placeholder, value, otherStyles, label, handleChangeText}: CustomFormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false);

  const showLabel: boolean = !!label; 

  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      {showLabel && <Text className='text-base text'></Text>}
      <View className='w-full 
      h-16 px-4 bg-[#d7dbe2] rounded-2xl 
      focus:border-secondary items-center'>
        <TextInput 
          className='flex-1 text-lg text-text font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={label === 'Password' && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField