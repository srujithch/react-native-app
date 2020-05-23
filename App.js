import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <ThemeProvider>
        <Button title="Hey!" />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
