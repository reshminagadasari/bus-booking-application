import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Welcome</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("MainTabs")}
        style={{ backgroundColor: "#FF5A5F", padding: 15, marginTop: 20 }}
      >
        <Text style={{ color: "#fff" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
