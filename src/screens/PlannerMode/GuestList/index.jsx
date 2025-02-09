import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import LayoutContainer from "../../../Layout/LayoutContainer";
import BackArrow from "../../../../assets/icons/back_arrow.svg";
import MoreBtn from "../../../../assets/icons/more_icon.svg";
import NoGuestSvg from "../../../../assets/icons/no_guest.svg";
import FontText from "../../../reuseable/FontText";
import GuestListCard from "./components/GuestListCard";

export default function GuestList({ navigation }) {
  const [guestList, setGuestList] = useState([]);

  const [guestTab] = useState([
    {
      title: "Share link with Guest",
      // icon: <Ionicons name="person" size={18} color="black" />,
      naviagtionName: "PersonalInfo",
      key: "1",
    },
    {
      title: "Register Guest",
      // icon: <MaterialIcons name="content-paste" size={18} color="black" />,
      naviagtionName: "History",
      key: "2",
    },
    {
      title: "Import list",
      // icon: <Feather name="settings" size={18} color="black" />,
      naviagtionName: "Settings",
      key: "3",
    },
  ]);

  // const isFocused = useIsFocused();

  return (
    <LayoutContainer>
      {guestList.length !== 0 ? (
        <View>
          <View className="mb-[22] flex-initial rounded-b-[20px]">
            <View className="py-[20px] flex flex-row justify-between items-center ">
              <View className="w-1/6">
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow
                    width={26}
                    height={26}
                    strokeWidth={1}
                    stroke="#9A9898"
                  />
                </Pressable>
              </View>
              <View className="w-2/6">
                <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
                  Guest List
                </FontText>
              </View>
              <View className="w-1/6">
                <Pressable className="ml-auto" onPress={() => {}}>
                  <MoreBtn
                    width={26}
                    height={26}
                    strokeWidth={1}
                    stroke="#9A9898"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <View className="flex-1">
            <View>
              <NoGuestSvg
                width={285}
                height={177}
                // strokeWidth={1}
                // stroke="#9A9898"
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View className="mb-[22] flex-initial rounded-b-[20px]">
            <View className="py-[20px] flex flex-row justify-between items-center ">
              <View className="w-1/6">
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow
                    width={26}
                    height={26}
                    strokeWidth={1}
                    stroke="#9A9898"
                  />
                </Pressable>
              </View>
              <View className="w-4/6">
                <FontText className="font-chillaxMedium text-center text-[16px] leading-[24px] text-[#2A2B2A]">
                  Create Guest List
                </FontText>
              </View>
              <View className="w-1/6"></View>
            </View>
          </View>

          <View className="flex">
            <View className="w-[311px] mx-auto">
              <FlatList
                vertical
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={guestTab}
                renderItem={({ item, index }) => (
                  <GuestListCard {...{ item }} />
                )}
              />
            </View>
          </View>
        </View>
      )}
    </LayoutContainer>
  );
}
