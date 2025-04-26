import { View, Text, Image } from "react-native";
import React from "react";
import { style } from "../styles/onContentStyle";
import { OnContentType } from "../types/onContentType";

export default function OnContent({ headerText, bodyText, image }: OnContentType) {
  return (
    <View style={style.contentContainer}>
      <Image source={image} style={style.imageStyle} />
      <Text style={style.textHeader}>{headerText}</Text>
      <Text style={style.textBody}>{bodyText}</Text>
    </View>
  );
}
