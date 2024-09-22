import { icons } from '@/constants'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

type FormFieldProps = {
  title: string,
  value: string,
  placeholder?: string,
  keyboardType?: string,
  handleChangeText: (text: string) => void,
  otherStyles: string
}

const FormField = ({
  title,
  value,
  placeholder,
  keyboardType,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='px-4 w-full h-16 flex-row items-center border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary'>
        <TextInput 
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7B7B8B"}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField