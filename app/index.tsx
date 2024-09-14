import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Link href='/profile' style={styles.linkStyle}>To Profile</Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkStyle: {
    color: 'red',
  }
});
