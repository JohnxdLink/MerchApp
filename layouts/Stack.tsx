import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnPreBoading from "../screens/OnPreBoading";
import OnBoarding from "../screens/OnBoarding";
import OnGetStarted from "../screens/OnGetStarted";
import Home from "../screens/Home";
import CustomHeader from "../components/CustomHeader";

export default function Stack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="OnPreBoarding">
      <Stack.Screen
        name="OnPreBoarding"
        options={{
          headerShown: false,
        }}
        component={() => <OnPreBoading />}
      />
      <Stack.Screen
        name="OnBoarding"
        options={{
          headerShown: false,
        }}
        component={() => <OnBoarding />}
      />
      <Stack.Screen
        name="OnGetStarted"
        options={{
          headerShown: false,
        }}
        component={() => <OnGetStarted />}
      />
      <Stack.Screen name="Home" options={{
        header: () => <CustomHeader/>,
      }} component={() => <Home />} />
    </Stack.Navigator>
  );
}
