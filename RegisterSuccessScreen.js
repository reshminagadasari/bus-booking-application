import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RegisterSuccessScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainTabs");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Successful 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
