import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/MyTicketsScreen";
import WalletScreen from "../screens/WalletScreen";
import MyTicketsScreen from "../screens/MyTicketsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyTickets" component={MyTicketsScreen} />

      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  );
}
