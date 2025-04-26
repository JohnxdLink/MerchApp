import { View, Text } from "react-native";
import React from "react";
import Stack from "./Stack";
import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
