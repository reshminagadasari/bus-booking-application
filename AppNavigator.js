import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BookingSuccessScreen from "../screens/BookingSuccessScreen";

// Navigators
import TabNavigator from "./TabNavigator";
import StackNavigator from "./StackNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="BookingFlow" component={StackNavigator} />

      <Stack.Screen
        name="BookingSuccess"
        component={BookingSuccessScreen}
      />
    </Stack.Navigator>
  );
}
