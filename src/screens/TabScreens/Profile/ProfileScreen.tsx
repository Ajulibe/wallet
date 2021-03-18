import React, { useRef } from "react";
import {
   View,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   StatusBar,
   Text
} from "react-native";
import {
   NavigationTabProp,
   NavigationBottomTabScreenComponent
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import ListTile from "../../../components/ListTile";
import IMAGES from "../../../utils/Images";
import UserProfilePhoto from "../../../components/UserProfilePhoto";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";
import globalStyles from "../../../components/css/GlobalCss";
import CardAccountNo from "../../../components/CardAccountNo";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../navigation/ProfileStack";
import { ROUTES } from "../../../navigation/Routes";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const ProfileScreen = ({ navigation }: Props) => {
   const ref = useRef<ScrollView | null>(null);
   useScrollToTop(ref);

   return (
      <>
         <StatusBar barStyle="light-content" />
         <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
                  <UserProfilePhoto imageSrc="" imageSize={90} />

                  <Text style={styles.profileName}>John Doe</Text>
                  <Text style={styles.profilePhone}>+2348078213212</Text>

                  <CardAccountNo bank={{} as any} />

                  <View style={styles.divider} />

                  <ListTile
                     leading={IMAGES["icon-edit-profile"]}
                     title="Edit Profile"
                     subtitle="Change your name, email address, photo"
                     onClick={() =>
                        navigation.navigate(ROUTES.EDIT_PROFILE_SCREEN)
                     }
                  />
                  <ListTile
                     leading={IMAGES["icon-password"]}
                     title="Security"
                     onClick={() => navigation.navigate(ROUTES.SECURITY_SCREEN)}
                  />
                  <ListTile
                     leading={IMAGES["icon-manage-account"]}
                     title="Manage payment methods "
                     onClick={() =>
                        navigation.navigate(ROUTES.PAYMENT_METHOD_SCREEN)
                     }
                  />
                  <ListTile
                     leading={IMAGES["icon-invite"]}
                     title="Invite Users"
                     onClick={() => null}
                  />
                  <View style={styles.divider} />
                  <ListTile
                     leading={IMAGES["icon-take-tour"]}
                     title="Take Tour"
                     onClick={() => null}
                  />
                  <ListTile
                     leading={IMAGES["icon-customer-support"]}
                     title="Customer Support"
                     onClick={() => null}
                  />
                  <ListTile
                     leading={IMAGES["icon-rate-us"]}
                     title="Rate Us"
                     onClick={() => null}
                  />
                  <ListTile
                     leading={IMAGES["icon-faq"]}
                     title="FAQs"
                     onClick={() => null}
                  />
                  <View style={styles.divider} />
                  <ListTile
                     leading={IMAGES["icon-logout"]}
                     title="Logout"
                     onClick={() => null}
                  />
               </View>
            </ScrollView>
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

export default ProfileScreen;
