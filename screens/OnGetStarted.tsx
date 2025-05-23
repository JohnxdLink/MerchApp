import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "../styles/onContentStyle";
import OnSkipContent from "../components/OnSkipContent";
import { useNavigation } from "@react-navigation/native";
import OnContent from "../components/OnContent";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamListType } from "../types/stackParamListType";

export default function OnGetStarted() {
  const navigate = useNavigation<StackNavigationProp<StackParamListType>>();

  return (
    <View style={style.wholeContainer}>
      <View style={style.container}>
        <OnContent
          headerText="Thank You!"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
          image={require("../assets/sample/cinnamoroll-2.png")}
        />

        <TouchableOpacity style={style.nextButton} onPress={() => navigate.navigate("Home")}>
          <Text style={style.nextButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
