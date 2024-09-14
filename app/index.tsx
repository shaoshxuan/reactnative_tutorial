import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>App</Text>
      <Link href='/profile' className='text-rose-600'>To Profile</Link>
    </View>
  );
};

export default App;
