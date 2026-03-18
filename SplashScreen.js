import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace("Login"), 2000);
  }, []);

  return (
    <View style={{ flex:1, backgroundColor:"#FF5A5F", justifyContent:"center", alignItems:"center" }}>
      <Text style={{ color:"#fff", fontSize:28 }}>Bus Booking</Text>
    </View>
  );
}
