import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import TicketDetailsCard from "../../../reuseable/TicketDetailsCard";
import FontText from "../../../reuseable/FontText";
import CalendarIconII from "../../../../assets/icons/calendar_icon_2.svg";
import BigCheckIcon from "../../../../assets/icons/big_green_check.svg";
import { useNavigation } from "@react-navigation/native";

export default function GuestListModal({
  detailsData,
  modalVisible,
  setModalVisible,
}) {
  const item = {
    uri: detailsData.image_uri,
  };
  const navigation = useNavigation();

  return (
    <Modal
      theme={{
        colors: {
          backdrop: "rgba(190, 27, 27, 0.7)",
        },
      }}
      animationType="slide"
      transparent={true}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <Pressable
        // onPress={() => setModalVisible(!modalVisible)}
        style={styles.centeredView}
      >
        <View style={styles.modalView1}>
          <View className="bg-white py-[23] px-[27] rounded-t-[16px]">
            <View className="flex justify-between items-center">
              <BigCheckIcon
                width={48}
                height={48}
                strokeWidth={0.3}
                stroke="#fff"
              />
              <FontText className="mt-[8px] text-[24px] leading-[32px] font-clashMedium">
                Event Created
              </FontText>
              <View className="my-[24px]">
                <TicketDetailsCard
                  item={item}
                  setLoaded={detailsData.setLoaded}
                  imageWidth={detailsData.width}
                />
              </View>
              <View className="my-[30px] flex-row justify-between items-center gap-[10]">
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  className="py-[12] bg-[#7E62F0] w-1/2 rounded-[10px]"
                >
                  <FontText className="text-white text-center text-[18px] font-chillaxMedium leading-[150%]">
                    Save
                  </FontText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    // navigation.navigate("Dashboard");
                  }}
                  className="py-[12] bg-white border border-[#7E62F0] w-1/2 rounded-[10px]"
                >
                  <FontText className="text-[#7E62F0] text-center text-[18px] font-chillaxMedium leading-[150%]">
                    Finish
                  </FontText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "black",
  },
  centeredView: {
    flex: 1,
    height: 256,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // padding: 20,
  },
  modalView1: {
    width: "100%",
    marginTop: "auto",
  },
  modalView2: {
    margin: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
