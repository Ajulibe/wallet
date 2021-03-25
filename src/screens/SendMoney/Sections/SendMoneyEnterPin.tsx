import React, { useState, useRef, useEffect } from "react";
import {
   View,
   StyleSheet,
   Text,
   ScrollView,
   SafeAreaView,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import COLORS from "../../../utils/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { SendMoneyStackParamList } from "../../../navigation/SendMoneyStack";
import { ROUTES } from "../../../navigation/Routes";
import CustomAppbar from "../../../components/CustomAppbar";
import globalStyles from "../../../components/css/GlobalCss";
import { hp, wp } from "../../../utils/Dimensions";
import UserProfilePhoto from "../../../components/UserProfilePhoto";
import KeyboardInput from "../../../components/KeyboardInput";
import CustomButton from "../../../components/Button";

type Props = StackScreenProps<
   SendMoneyStackParamList,
   ROUTES.SEND_MONEY_ENTER_PIN_SCREEN
>;

const SendMoneyEnterPin = ({ navigation }: Props) => {
   const [amount, setAmount] = useState("0");

   // on amount entered
   const onAmountEntered = (num: string | number) => {
      if (num == "." || amount.length >= 4) {
         return;
      }
      let newAmount = `${amount}${num}`;
      newAmount = newAmount == "" ? "0" : newAmount;
      newAmount =
         newAmount[0] == "0" && newAmount[1] != "."
            ? parseInt(newAmount).toString()
            : newAmount;
      setAmount(newAmount);
   };

   const onDelete = () => {
      let newAmount = amount.substring(0, amount.length - 1);
      newAmount = newAmount == "" ? "0" : newAmount;
      setAmount(newAmount);
   };

   const onSubmit = () => {
      navigation.navigate(ROUTES.HOME_SCREEN_STACK);
   };
   return (
      <>
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <CustomAppbar navigation={navigation} title="" />
            <KeyboardAvoidingView
               behavior={"padding"}
               style={{ flex: 1 }}
               keyboardVerticalOffset={Platform.OS == "android" ? 0 : -50}
            >
               <ScrollView
                  contentContainerStyle={{
                     flexGrow: 1
                  }}
                  keyboardShouldPersistTaps="handled"
                  bounces={false}
                  showsVerticalScrollIndicator={false}
               >
                  <View
                     style={[
                        globalStyles.container,
                        globalStyles.centerHorizontal,
                        { paddingHorizontal: 0, width: "100%" }
                     ]}
                  >
                     <Text style={[styles.amountOfUser]}>
                        Please Enter your 4-digit PIN to complete your
                        transaction
                     </Text>
                     <Text
                        style={[
                           styles.inputField,
                           {
                              color:
                                 amount == "0"
                                    ? "#C4C4C4"
                                    : COLORS.light.textBlack,
                              backgroundColor:
                                 amount == "0"
                                    ? "#f5f5f5"
                                    : "rgba(221,74,10,0.05)"
                           }
                        ]}
                     >
                        {amount}
                     </Text>
                     <KeyboardInput
                        onNumberClick={onAmountEntered}
                        onDelete={onDelete}
                     />
                     <View style={styles.btnWrapper}>
                        <CustomButton
                           bgColor={
                              amount.length != 4
                                 ? COLORS.light.disabled
                                 : COLORS.light.primary
                           }
                           textColor={COLORS.light.white}
                           btnText={"Confirm"}
                           onClick={onSubmit}
                        />
                     </View>
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   nameOfUser: {
      fontSize: wp(18),
      lineHeight: hp(24),
      fontFamily: "Inter-Medium",
      color: COLORS.light.textBlack,
      textAlign: "center",
      marginTop: hp(18),
      marginBottom: hp(6)
   },
   amountOfUser: {
      fontSize: wp(14),
      lineHeight: hp(24),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack50,
      textAlign: "center",
      marginBottom: hp(24)
   },
   inputField: {
      fontSize: wp(38),
      lineHeight: hp(40),
      fontFamily: "Inter-SemiBold",
      color: "#C4C4C4",
      textAlign: "center",
      paddingVertical: hp(16),
      backgroundColor: "#F5F5F5",
      width: "100%"
   },
   btnWrapper: {
      width: "100%",
      paddingHorizontal: wp(30)
   }
});

export default SendMoneyEnterPin;