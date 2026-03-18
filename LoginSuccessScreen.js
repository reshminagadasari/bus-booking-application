import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoginSuccessScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainTabs");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Successful ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
