import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/onContentStyle";
import OnContent from "../components/OnContent";
import OnSkipContent from "../components/OnSkipContent";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamListType } from "../types/stackParamListType";

export default function OnPreBoading() {
  const navigate = useNavigation<StackNavigationProp<StackParamListType>>();

  return (
    <View style={style.wholeContainer}>
      <View style={style.container}>
        <OnContent
          headerText="Hello Cinnamoroll!"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui."
          image={require("../assets/sample/cinnamoroll.png")}
        />

        <TouchableOpacity style={style.nextButton} onPress={() => navigate.navigate("OnBoarding")}>
          <Text style={style.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <OnSkipContent />
      </View>
    </View>
  );
}
