import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, View, Modal, Image, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";

interface Props {
   modalVisible: boolean;
   closeModal: () => void;
}

export default function ModalPos(props: Props) {
   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={props.modalVisible}
         onRequestClose={() => props.closeModal()}
      >
         <View style={styles.container}>
            <View style={styles.wrapper}>
               <TouchableOpacity
                  onPress={props.closeModal}
                  style={styles.close}
               >
                  <AntDesign
                     name={"closecircleo"}
                     color={COLORS.light.primary}
                     size={20}
                  />
               </TouchableOpacity>
               <Text style={styles.title}>POS Agents</Text>
               <Text style={styles.subtitle}>
                  This is how to add money through a POS agent.
               </Text>
               <Text style={styles.rowItem}>
                  1. Open your banking app on your mobile phone
               </Text>
               <Text style={styles.rowItem}>
                  2. Go to the section to transfer money
               </Text>
               <Text style={styles.rowItem}>
                  3. Select ‘<Text style={styles.itemColored}>Surepay</Text>’
                  from the list of bank options
               </Text>
               <Text style={styles.rowItem}>
                  4. Enter your number “
                  <Text style={styles.itemColored}>080627 96666</Text>” as your
                  account number
               </Text>
               <Text style={styles.rowItem}>
                  5. Enter the amount and complete payment.
               </Text>
            </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)"
   },
   wrapper: {
      flex: 1,
      padding: wp(16),
      width: Dimensions.get("window").width - 50,
      maxHeight: 400,
      backgroundColor: COLORS.light.white,
      borderRadius: 15
   },
   close: {
      width: "100%",
      alignItems: "flex-end"
   },
   title: {
      fontSize: wp(16),
      lineHeight: hp(18),
      fontFamily: "Inter-SemiBold",
      color: COLORS.light.textBlack
   },
   subtitle: {
      fontSize: wp(12),
      lineHeight: hp(16),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack50,
      marginTop: hp(12),
      marginBottom: hp(24)
   },
   rowItem: {
      fontSize: wp(12),
      lineHeight: hp(18),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack,
      marginBottom: hp(18)
   },
   itemColored: {
      color: COLORS.light.secondary,
      fontFamily: "Inter-Medium"
   }
});
