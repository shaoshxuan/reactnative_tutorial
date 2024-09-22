import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FormType = {
  email: string,
  password: string
}

const SignIn = () => {
  const [form, setForm] = useState<FormType>({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="my-6 px-4 w-full h-full justify-center">
          <Image 
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="mt-10 text-2xl text-white text-semibold font-psemibold">
            Log in to Aura
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
