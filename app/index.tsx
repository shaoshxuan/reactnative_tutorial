import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="px-4 w-full min-h-[85vh] flex justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-center text-3xl text-white font-bold">
              {`Discover Endless Possibilities with `}
              <Text className="text-secondary-200">{`Aora`}</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-28"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-7 text-sm font-pregular text-gray-100 text-center">
            {`Where creativity meets innovation: embark on a journey of limitless exploration with Aora!`}
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/signIn')}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>
      
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
