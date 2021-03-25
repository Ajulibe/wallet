import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import UserProfilePhoto from "../../../components/UserProfilePhoto";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";
import globalStyles from "../../../components/css/GlobalCss";
import { StackScreenProps } from "@react-navigation/stack";
import { SendMoneyStackParamList } from "../../../navigation/SendMoneyStack";
import { ROUTES } from "../../../navigation/Routes";
import CustomAppbar from "../../../components/CustomAppbar";
import { TouchableOpacity } from "react-native-gesture-handler";
import MoneyListTile from "../Components/MoneyListTile";
import authStyles from "../../../components/css/AuthFormCss";
import CustomButton from "../../../components/Button";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = StackScreenProps<
   SendMoneyStackParamList,
   ROUTES.SEND_MONEY_SUMMARY_SCREEN
>;

const SendMoneySummary = ({ navigation }: Props) => {
   const onSubmit = () => {
      navigation.navigate(ROUTES.SEND_MONEY_ENTER_PIN_SCREEN);
   };
   return (
      <>
         {/* <StatusBar barStyle="light-content" /> */}
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <CustomAppbar
               navigation={navigation}
               title="Transaction Summary"
               trailing={
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <Entypo name={"edit"} size={14} />
                  </TouchableOpacity>
               }
            />
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
                  <Text style={[styles.amountOfUser]}>+234 807 340 4890</Text>

                  <View style={styles.divider} />
                  <MoneyListTile
                     title={"Amount To Transfer"}
                     price={"N1,232.00"}
                  />
                  <View style={styles.divider} />
                  <MoneyListTile title={"Transaction Fee"} price={"N5.00"} />
                  <View style={styles.divider} />
                  <Text style={[authStyles.inputLabel, { marginTop: hp(24) }]}>
                     Note
                  </Text>
                  <Text style={styles.noteText}>
                     Yo! what’s up man, please this is my contribution to
                     Racheal’s wedding
                  </Text>
                  <View style={[styles.tagsWrapper]}>
                     <MaterialCommunityIcons
                        name={"tag-outline"}
                        color={"#A6A8B5"}
                        size={24}
                     />
                     <TouchableOpacity
                        style={[
                           styles.tagItem,
                           {
                              backgroundColor: COLORS.light.tagBgActive
                           }
                        ]}
                     >
                        <Text
                           style={[
                              styles.item,
                              {
                                 color: COLORS.light.textBlack
                              }
                           ]}
                        >
                           Entertainment
                        </Text>
                     </TouchableOpacity>
                  </View>

                  <View style={{ flex: 1 }} />

                  <View style={styles.btnWrapper}>
                     <CustomButton
                        bgColor={COLORS.light.primary}
                        textColor={COLORS.light.white}
                        btnText={"Continue"}
                        onClick={onSubmit}
                     />
                  </View>
               </View>
            </ScrollView>
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
   noteText: {
      fontSize: wp(14),
      lineHeight: hp(24),
      fontFamily: "Inter-Regular",
      color: "rgba(166,168,181,1)",
      width: "100%"
   },
   divider: {
      backgroundColor: "#EBEBF2",
      height: 1,
      width: "100%"
   },
   tagsWrapper: {
      marginTop: hp(24),
      flex: 1,
      flexDirection: "row",
      width: "100%",
      alignItems: "center"
   },
   tagItem: {
      borderRadius: 4,
      marginLeft: hp(12),
      paddingHorizontal: wp(12),
      paddingVertical: hp(7)
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

export default SendMoneySummary;
