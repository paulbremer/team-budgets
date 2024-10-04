import { Text } from "react-native";
import React from "react";
import { PressableScale } from "pressto";
import { Colors } from "@/constants/Colors";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <PressableScale
      style={{
        backgroundColor: Colors.light.tabIconSelected,
        width: "auto",
        height: 48,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: 800 }}>{title}</Text>
    </PressableScale>
  );
}
