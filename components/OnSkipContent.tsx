import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/OnContentStyle";

export default function OnSkipContent() {
    const navigate = useNavigation();
  return (
    <View>
      <TouchableOpacity style={style.skipButton} onPress={()=>{navigate.navigate("Home")}}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}
