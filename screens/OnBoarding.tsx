import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/onContentStyle";
import OnSkipContent from "../components/OnSkipContent";
import OnContent from "../components/OnContent";
import { StackParamListType } from "../types/stackParamListType";
import { StackNavigationProp } from "@react-navigation/stack";

export default function OnBoaresding() {
  const navigate = useNavigation<StackNavigationProp<StackParamListType>>();

  return (
    <View style={style.wholeContainer}>
      <View style={style.container}>
        <OnContent
          headerText="How are You?"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
"
          image={require("../assets/sample/cinnamoroll-1.jpg")}
        />

        <TouchableOpacity style={style.nextButton} onPress={() => navigate.navigate("OnGetStarted")}>
          <Text style={style.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <OnSkipContent />
      </View>
    </View>
  );
}
