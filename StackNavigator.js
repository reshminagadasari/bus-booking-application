import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Booking flow screens
import BusListScreen from "../screens/BusListScreen";
import SeatSelectionScreen from "../screens/SeatSelectionScreen";
import BoardingDroppingScreen from "../screens/BoardingDroppingScreen";
import PassengerScreen from "../screens/PassengerScreen";
import BookingSuccessScreen from "../screens/BookingSuccessScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* 1️⃣ Bus List */}
      <Stack.Screen
        name="BusList"
        component={BusListScreen}
      />

      {/* 2️⃣ Seat Selection */}
      <Stack.Screen
        name="SeatSelection"
        component={SeatSelectionScreen}
      />

      {/* 3️⃣ Boarding & Dropping Points */}
      <Stack.Screen
        name="BoardingDropping"
        component={BoardingDroppingScreen}
      />

      {/* 4️⃣ Passenger Details */}
      <Stack.Screen
        name="Passenger"
        component={PassengerScreen}
      />

      {/* 5️⃣ Booking Success */}
      <Stack.Screen
        name="BookingSuccess"
        component={BookingSuccessScreen}
      />
    </Stack.Navigator>
  );
}
