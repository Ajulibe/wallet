import React, { useRef, useState } from "react";
import {
   View,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   Text,
   Platform,
   KeyboardAvoidingView,
   TouchableOpacity
} from "react-native";
import UserProfilePhoto from "../../../components/UserProfilePhoto";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";
import globalStyles from "../../../components/css/GlobalCss";
import { StackScreenProps } from "@react-navigation/stack";
import { SendMoneyStackParamList } from "../../../navigation/SendMoneyStack";
import { ROUTES } from "../../../navigation/Routes";
import CustomAppbar from "../../../components/CustomAppbar";
import MoneyListTile from "../Components/MoneyListTile";
import Input from "../../../components/Input";
import authStyles from "../../../components/css/AuthFormCss";
import CustomButton from "../../../components/Button";

type Props = StackScreenProps<
   SendMoneyStackParamList,
   ROUTES.SEND_MONEY_DETAIL_SCREEN
>;

const SendMoneyDetail = ({ navigation }: Props) => {
   const [paymentNote, setPaymentNote] = useState("");
   const [tag, setTag] = useState("");
   const tags = [
      "Food",
      "Shopping",
      "Travel",
      "Utilities",
      "Entertainment",
      "Others"
   ];

   const onSubmit = () => {
      navigation.navigate(ROUTES.SEND_MONEY_SUMMARY_SCREEN);
   };

   return (
      <>
         {/* <StatusBar barStyle="light-content" /> */}
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <CustomAppbar navigation={navigation} title="Sending Money To" />
            <KeyboardAvoidingView
               behavior={"padding"}
               style={{ flex: 1 }}
               keyboardVerticalOffset={Platform.OS == "android" ? -300 : -50}
            >
               <ScrollView
                  contentContainerStyle={{ flexGrow: 1 }}
                  keyboardShouldPersistTaps="handled"
                  bounces={false}
                  showsVerticalScrollIndicator={false}
               >
                  <View
                     style={[
                        globalStyles.container,
                        globalStyles.centerHorizontal
                     ]}
                  >
                     <UserProfilePhoto
                        imageSrc=""
                        imageSize={70}
                        showIcon={false}
                     />
                     <Text style={styles.nameOfUser}>Adebowale Adewale</Text>
                     <Text style={[styles.amountOfUser]}>
                        +234 807 340 4890
                     </Text>

                     <View style={styles.divider} />
                     <MoneyListTile
                        title={"Amount To Transfer"}
                        price={"N1,232.00"}
                     />
                     <View style={styles.divider} />
                     <MoneyListTile title={"Transaction Fee"} price={"N5.00"} />
                     <Text style={authStyles.inputLabel}>Enter a Note </Text>
                     <Input
                        placeholder="Type a message here"
                        placeholderTextColor="rgb(134,146,185,1)"
                        errorText={""}
                        keyboardType="default"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onInputChange={(value) => setPaymentNote(value)}
                        initialValue=""
                        initiallyValid={false}
                        required
                        secureTextEntry={false}
                        minLength={2}
                        textContentType="none"
                     />
                     <Text
                        style={[authStyles.inputLabel, { marginTop: hp(24) }]}
                     >
                        What are you paying for?
                     </Text>
                     <View style={[styles.tagsWrapper]}>
                        {tags.map((t) => (
                           <TouchableOpacity
                              onPress={() => setTag(t)}
                              key={t}
                              style={[
                                 styles.tagItem,
                                 {
                                    backgroundColor:
                                       t == tag
                                          ? COLORS.light.tagBgActive
                                          : COLORS.light.transparent
                                 }
                              ]}
                           >
                              <Text
                                 style={[
                                    styles.item,
                                    {
                                       color:
                                          t == tag
                                             ? COLORS.light.textBlack
                                             : COLORS.light.tagTextInactive
                                    }
                                 ]}
                              >
                                 {t}
                              </Text>
                           </TouchableOpacity>
                        ))}
                     </View>

                     <View style={{ flex: 1 }} />

                     <View style={styles.btnWrapper}>
                        <CustomButton
                           bgColor={
                              paymentNote != "" || tag != ""
                                 ? COLORS.light.primary
                                 : COLORS.light.disabled
                           }
                           textColor={COLORS.light.white}
                           btnText={"Continue"}
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
   divider: {
      backgroundColor: "#EBEBF2",
      height: 1,
      width: "100%"
   },
   tagsWrapper: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start" // if you want to fill rows left to right
   },
   tagItem: {
      borderRadius: 4,
      marginBottom: hp(12),
      paddingHorizontal: wp(12),
      paddingVertical: hp(7),
      marginRight: wp(8),
      borderColor: "rgba(235,235,242,1)",
      borderWidth: 1
   },
   item: {
      fontSize: wp(14),
      lineHeight: hp(16),
      fontFamily: "Inter-Regular",
      color: COLORS.light.tagTextInactive
   },
   btnWrapper: {
      width: "100%"
   }
});

export default SendMoneyDetail;
