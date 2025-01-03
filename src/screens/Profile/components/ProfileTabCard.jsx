import React, { useState } from "react";
import { Pressable, View, Switch } from "react-native";
import FontText from "../../../reuseable/FontText";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

export default function ProfileTabCard({ item }) {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Pressable onPress={() => navigation.navigate(item.naviagtionName)}>
      <View className="bg-[#F3F2F2] mt-[16px] rounded-2xl p-6 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          {item.icon}
          <FontText className="font-trapRegular text-[16px] text-[#2A2B2A] leading-[20px]">
            {item.title}
          </FontText>
        </View>
        {item.naviagtionName === "PlannerMode" ? (
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          <Entypo name="chevron-right" size={14} color="black" />
        )}
      </View>
    </Pressable>
  );
}
