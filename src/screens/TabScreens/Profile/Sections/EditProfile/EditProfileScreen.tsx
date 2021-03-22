import React from "react";
import {
   View,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   StatusBar
} from "react-native";
import ListTile from "../../../../../components/ListTile";
import IMAGES from "../../../../../utils/Images";
import COLORS from "../../../../../utils/Colors";
import { hp, wp } from "../../../../../utils/Dimensions";
import globalStyles from "../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../../../navigation/Routes";
import { ProfileStackParamList } from "../../../../../navigation/ProfileStack";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const EditProfileScreen = ({ navigation }: Props) => {
   // {/*
   //    // @ts-ignore */}
   return (
      <>
         {/* <StatusBar barStyle="light-content" /> */}
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <CustomAppbar navigation={navigation} title="Edit Profile" />
            <View
               style={[globalStyles.container, globalStyles.centerHorizontal]}
            >
               <ListTile
                  leading={IMAGES["icon-edit-detail"]}
                  title="Edit Personal"
                  subtitle="Change your full name &amp; email address"
                  onClick={() =>
                     navigation.navigate(ROUTES.CHANGE_PERSONAL_DETAIL_SCREEN)
                  }
               />
               <ListTile
                  leading={IMAGES["icon-edit-detail"]}
                  title="Profile Photo"
                  // subtitle="Change your profile photo"
                  onClick={() => null}
               />
            </View>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   profileName: {
      fontSize: wp(16),
      fontFamily: "Inter-Medium",
      lineHeight: hp(16),
      color: COLORS.light.textBlack,
      marginTop: hp(18),
      marginBottom: hp(8)
   },
   profilePhone: {
      textAlign: "center",
      fontSize: wp(12),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack40,
      lineHeight: hp(12),
      marginBottom: 28
   },
   cardWrapper: {
      width: "100%",
      paddingHorizontal: wp(24),
      paddingVertical: hp(18),
      borderColor: "#F2F6F8"
   },
   divider: {
      marginTop: hp(30),
      marginBottom: hp(18),
      backgroundColor: "#EBEBF2",
      height: 1,
      width: "100%"
   }
});

export default EditProfileScreen;
