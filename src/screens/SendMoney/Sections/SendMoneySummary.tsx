import React, { useEffect, useRef, useState } from "react";
import {
   View,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   Text,
   NativeSyntheticEvent,
   NativeScrollEvent,
   Platform
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import ListTile from "../../../components/ListTile";
import IMAGES from "../../../utils/Images";
import UserProfilePhoto from "../../../components/UserProfilePhoto";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";
import globalStyles from "../../../components/css/GlobalCss";
import CardAccountNo from "../../../components/CardAccountNo";
import { StackScreenProps } from "@react-navigation/stack";
import { SendMoneyStackParamList } from "../../../navigation/SendMoneyStack";
import { ROUTES } from "../../../navigation/Routes";
import CustomAppbar from "../../../components/CustomAppbar";

type Props = StackScreenProps<
   SendMoneyStackParamList,
   ROUTES.SEND_MONEY_SUMMARY_SCREEN
>;

const SendMoneySummary = ({ navigation }: Props) => {
   const [hideSubtitle, setHideSubtitle] = useState(false);
   const ref = useRef<ScrollView | null>(null);
   useScrollToTop(ref);

   //Hide Subtitle(& notification bell) on 90px scroll up
   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const positionX = event.nativeEvent.contentOffset.x;
      const positionY = event.nativeEvent.contentOffset.y;

      if (positionY > 100) {
         setHideSubtitle(true);
      } else if (hideSubtitle) {
         if (Platform.OS == "android") {
            if (positionY < 4) setHideSubtitle(false);
         } else {
            if (positionY < 80) setHideSubtitle(false);
         }
      }
   };

   React.useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
         console.log("Payload is called .....................");
      });
      return unsubscribe;
   }, [navigation]);

   return (
      <>
         {/* <StatusBar barStyle="light-content" /> */}
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <CustomAppbar navigation={navigation} title="Sending Money To" />
            <ScrollView
               contentContainerStyle={{ flexGrow: 1 }}
               keyboardShouldPersistTaps="handled"
               bounces={false}
               showsVerticalScrollIndicator={false}
               onScroll={(event) => handleScroll(event)}
               onScrollEndDrag={(event) => handleScroll(event)}
               scrollEventThrottle={160}
            >
               <View
                  style={[
                     globalStyles.container,
                     globalStyles.centerHorizontal
                  ]}
               >
                  <UserProfilePhoto imageSrc="" imageSize={90} />

                  <Text style={styles.profileName}>John Doe</Text>
                  <Text style={styles.profilePhone} textBreakStrategy="simple">
                     {" +2348078213212 "}
                  </Text>

                  <CardAccountNo bank={{} as any} />

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
      // lineHeight: hp(12),
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

export default SendMoneySummary;
