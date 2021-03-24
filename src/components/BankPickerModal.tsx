import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   StyleSheet,
   Platform,
   Image
} from "react-native";
import COLORS from "../utils/Colors";
import { BankData, BankInterface } from "../extra/BankData";
import { ListItem, BottomSheet } from "react-native-elements";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   isVisible: boolean;
   onClose: () => void;
   current: BankInterface;
   onBankChange: (bank: BankInterface) => void;
}

export default function BankPickerModal(props: Props) {
   const [banks, setBanks] = useState(BankData.banks);

   const BankItem = ({
      bank,
      current
   }: {
      bank: BankInterface;
      current?: BankInterface;
   }) => (
      <TouchableOpacity
         onPress={() => {
            props.onBankChange(bank);
            props.onClose();
         }}
      >
         <View style={styles.bankItem}>
            <Image
               source={{
                  uri: bank.bankLogo
               }}
               style={styles.bankImage}
            />
            <Text
               style={[
                  styles.bankText,
                  {
                     fontFamily:
                        current != null && bank.bankCode == current.bankCode
                           ? "Inter-Medium"
                           : "Inter-Regular"
                  }
               ]}
            >
               {bank.bankName}
            </Text>
         </View>
      </TouchableOpacity>
   );

   return (
      <BottomSheet
         modalProps={{
            animationType: "slide",
            onDismiss: () => props.onClose(),
            collapsable: true,
            onRequestClose: () => props.onClose(),
            focusable: true
         }}
         isVisible={props.isVisible}
         containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
         <View>
            <View style={styles.header}>
               <Text style={styles.bankTitle}>Please Select a Bank</Text>
               <Text style={styles.bankSubtitle}>
                  Select your preferred bank for this transaction.
               </Text>
            </View>

            <View
               style={[
                  styles.container
                  // { maxHeight: inputFocus ? "90%" : 300 }
               ]}
            >
               <FlatList
                  data={banks}
                  keyboardShouldPersistTaps={"handled"}
                  bouncesZoom={true}
                  renderItem={(data) => (
                     <BankItem bank={data.item} current={props.current} />
                  )}
                  keyExtractor={(item) => item.bankCode}
               />
            </View>
         </View>
      </BottomSheet>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.light.white,
      maxHeight: hp(375),
      paddingHorizontal: wp(30)
   },
   header: {
      paddingTop: hp(42),
      paddingHorizontal: wp(30),
      backgroundColor: COLORS.light.white,
      shadowColor: "#333333",
      // shadowOffset: { width: -1, height: -3 },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      borderTopColor: "#eee",
      borderTopWidth: Platform.OS == "android" ? 1 : 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
   },
   bankTitle: {
      fontSize: wp(16),
      lineHeight: hp(21),
      fontFamily: "Inter-SemiBold",
      color: COLORS.light.textBlack
   },
   bankSubtitle: {
      fontSize: wp(12),
      lineHeight: hp(16),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack50,
      marginBottom: hp(24),
      marginTop: hp(8)
   },
   bankItem: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      marginBottom: hp(30)
   },
   bankText: {
      fontSize: wp(14),
      lineHeight: hp(24),
      marginLeft: wp(15),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack
   },
   bankImage: {
      width: wp(30),
      height: wp(30),
      resizeMode: "contain",
      borderRadius: 4
   }
});
