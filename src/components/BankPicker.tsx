import React, { useEffect, useState } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   StyleSheet,
   Platform,
   Image
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { BankData, BankInterface } from "../extra/BankData";
import COLORS from "../utils/Colors";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";

interface Props {
   current?: BankInterface;
   onBankChange: (bank: BankInterface) => void;
}

export function BankPicker(props: Props) {
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
            <View style={{ flex: 1 }} />
            <RadioDot
               color={
                  current != null && bank.bankCode == current.bankCode
                     ? COLORS.light.secondary
                     : "transparent"
               }
               bgColor={
                  current != null && bank.bankCode == current.bankCode
                     ? COLORS.light.secondaryLight
                     : "rgb(245,245,245)"
               }
            />
         </View>
      </TouchableOpacity>
   );

   const RadioDot = ({
      color,
      bgColor
   }: {
      color: string;
      bgColor: string;
   }) => (
      <View style={[styles.radioDot, { backgroundColor: bgColor }]}>
         <View style={[styles.dot, { backgroundColor: color }]}></View>
      </View>
   );

   return (
      <FlatList
         data={banks}
         keyboardShouldPersistTaps={"handled"}
         bouncesZoom={true}
         renderItem={(data) => (
            <BankItem bank={data.item} current={props.current} />
         )}
         keyExtractor={(item) => item.bankCode}
      />
   );
}

const styles = StyleSheet.create({
   bankItem: {
      flexDirection: "row",
      width: "100%",
      paddingVertical: hp("2.21%"),
      borderTopColor: "rgb(235,235,242)",
      borderTopWidth: 0.5,
      // justifyContent: "space-between",
      alignItems: "center"
   },
   bankText: {
      fontSize: wp("3.73%"),
      overflow: "hidden",
      marginLeft: wp("4.8%"),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack
   },
   bankImage: {
      width: wp("9.3%"),
      height: wp("9.3%"),
      resizeMode: "contain",
      borderRadius: 4
   },
   radioDot: {
      width: wp("8%"),
      height: wp("8%"),
      backgroundColor: "#F4F1EF",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center"
   },
   dot: {
      width: wp("6%"),
      height: wp("6%"),
      backgroundColor: COLORS.light.primary,
      borderRadius: 50
   }
});
