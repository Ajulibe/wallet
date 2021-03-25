import React, { useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   StyleSheet,
   Clipboard,
   Image
} from "react-native";
import { BankData, BankInterface } from "../../../extra/BankData";
import COLORS from "../../../utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../../../utils/Dimensions";
import * as Animatable from "react-native-animatable";

interface Props {
   current?: BankInterface;
   onBankChange: (bank?: BankInterface) => void;
}

export function BankPickerUssd(props: Props) {
   const [banks, setBanks] = useState(BankData.banks);

   const copyCode = (text: String) => {
      Clipboard.setString(String(text));
   };

   const BankItem = ({
      bank,
      current
   }: {
      bank: BankInterface;
      current?: BankInterface;
   }) => (
      <TouchableOpacity
         style={{ marginBottom: hp(8) }}
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
            <Text style={styles.bankName}>
               {bank.bankName}{" "}
               <Text style={styles.bankCode}>*{bank.bankCode}*</Text>
            </Text>
         </View>
         <Animatable.View
            style={[
               styles.bottomContainer,
               { height: current?.bankCode == bank.bankCode ? hp(200) : 0 }
            ]}
            key={0}
            animation={
               current?.bankCode == bank.bankCode ? "slideInDown" : "slideOutUp"
            }
            easing={"linear"}
            duration={500}
         >
            <Text style={styles.codeInstruction}>
               Tap the code below to complete this transaction with Guaranty
               Trust Bank 737
            </Text>
            <View style={styles.codeWrapper}>
               <MaterialIcons
                  name={"call"}
                  color={COLORS.light.secondary}
                  size={18}
               />
               <Text style={styles.code}>*737*6*7297*182389#</Text>
               <View style={{ flex: 1 }} />
               <TouchableOpacity onPress={() => copyCode(bank.bankCode)}>
                  <Text style={styles.copy}>COPY</Text>
               </TouchableOpacity>
            </View>
         </Animatable.View>
      </TouchableOpacity>
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
      paddingVertical: hp(12),
      backgroundColor: "#ECF1F4",
      borderRadius: 4,
      alignItems: "center"
   },
   bankName: {
      fontSize: wp(14),
      lineHeight: hp(24),
      marginLeft: wp(11),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack
   },
   bankCode: {
      fontFamily: "Inter-Bold"
   },
   bankImage: {
      width: wp(30),
      height: wp(30),
      resizeMode: "contain",
      borderRadius: 4,
      marginLeft: wp(8)
   },
   bottomContainer: {},
   codeInstruction: {
      marginTop: hp(36),
      marginBottom: hp(27),
      fontSize: wp(12),
      lineHeight: hp(16),
      color: COLORS.light.textBlack50,
      fontFamily: "Inter-Regular"
   },
   codeWrapper: {
      flexDirection: "row"
      // marginBottom: hp(54)
   },
   code: {
      marginLeft: hp(21),
      marginRight: hp(2),
      fontSize: wp(14),
      lineHeight: hp(18),
      color: COLORS.light.secondary,
      fontFamily: "Inter-SemiBold"
   },
   copy: {
      fontSize: wp(12),
      lineHeight: hp(18),
      color: COLORS.light.primary,
      fontFamily: "Inter-SemiBold",
      textDecorationLine: "underline"
   }
});
