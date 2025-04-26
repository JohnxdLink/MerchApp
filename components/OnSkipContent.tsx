import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/onContentStyle";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamListType } from "../types/stackParamListType";

export default function OnSkipContent() {
  const navigate = useNavigation<StackNavigationProp<StackParamListType>>();

  return (
    <View>
      <TouchableOpacity
        style={style.skipButton}
        onPress={() => {
          navigate.navigate("Home");
        }}
      >
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}
