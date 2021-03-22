import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Animated, Easing } from "react-native";
import { Text } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ROUTES } from "../../../../navigation/Routes";
import COLORS from "../../../../utils/Colors";
import { hp, wp } from "../../../../utils/Dimensions";
import IMAGES from "../../../../utils/Images";

interface Props {
   onNotificationClick?: () => void; //Back button press
   title: any; //title of the app bar
   subtitle?: any; // Appbar subtitle
   trailing?: JSX.Element; //the trailing/end icon(s)
   // navigation?: StackNavigationProp<any, any>; //list click listener
   navigation?: any; //list click listener,
   hideSubtitle?: boolean; //sow/hide subtitle, notification,...
   showBallance?: boolean;
}
const HeaderHome = (props: Props) => {
   const onNotificationClick = () => {
      if (props.onNotificationClick == null) {
         props.navigation?.navigate(ROUTES.NOTIFICATION_SCREEN);
      } else {
         //overriding the click action
         props.onNotificationClick();
      }
   };

   const headerPaddingTop = useState(new Animated.Value(0))[0];
   const ballanceHeight = useState(new Animated.Value(0))[0];
   useEffect(() => {
      if (props.hideSubtitle) {
         startAnim(16);
         //whether show ballance in the top right
         if (props.showBallance) startBallanceAnim(24);
      } else {
         startAnim(48);
         startBallanceAnim(0);
      }
   }, [props.hideSubtitle]);
   //Toolbar(AppBar) header padding animation
   const startAnim = (toValue: number) => {
      Animated.timing(headerPaddingTop, {
         toValue: toValue,
         duration: 300,
         easing: Easing.linear,
         useNativeDriver: false
      }).start();
   };
   //Show/Hide Ballance Animation with height anim timing
   const startBallanceAnim = (toValue: number) => {
      Animated.timing(ballanceHeight, {
         toValue: toValue,
         duration: 300,
         easing: Easing.linear,
         useNativeDriver: false
      }).start();
   };

   return (
      <>
         <Animated.View
            style={[styles.container, { paddingTop: headerPaddingTop }]}
         >
            <View style={styles.textContainer}>
               <Text style={styles.title}>{props.title}</Text>
               {props.subtitle && !props.hideSubtitle && (
                  <Text style={styles.subtitle}>{props.subtitle}</Text>
               )}
            </View>

            {/* <View style={{ position: "relative", alignItems: "center" }}> */}
            <View
               // onPress={onNotificationClick}
               style={styles.trailingWrapper}
            >
               <TouchableOpacity onPress={onNotificationClick}>
                  <Image
                     source={IMAGES["icon-notification"]}
                     style={styles.image}
                  />
                  <View style={styles.notificationDot} />
               </TouchableOpacity>
               {/* Total Ballance show on scroll up  */}
               <Animated.View
                  style={[
                     styles.ballanceWrapper,
                     {
                        height: ballanceHeight
                        // width: !props.hideSubtitle ? 0 : 130
                     }
                  ]}
               >
                  <Text style={styles.ballance}>
                     Balance: <Text style={styles.bold}>N234,934.78</Text>
                  </Text>
               </Animated.View>
            </View>
            {/* </View> */}
            {props.trailing != null && props.trailing}
         </Animated.View>
         <View style={styles.divider} />
      </>
   );
};

export default HeaderHome;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(16),
      paddingTop: hp(48),
      paddingHorizontal: wp(30)
      // borderBottomColor: "rgba(32,47,68,.06)",
      // borderBottomWidth: 1
   },
   divider: {
      height: 1,
      backgroundColor: "rgba(32,47,68,.06)",
      marginHorizontal: wp(30)
   },
   textContainer: {
      flex: 1,
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-Bold",
      lineHeight: hp(24),
      fontSize: wp(18),
      color: COLORS.light.textBlack
   },
   subtitle: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(24),
      fontSize: wp(14),
      color: COLORS.light.textBlackLight
   },
   trailingWrapper: {
      position: "relative",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   image: {
      width: wp(24),
      height: wp(24),
      resizeMode: "contain"
   },
   notificationDot: {
      position: "absolute",
      top: 1,
      right: 1,
      alignItems: "center",
      justifyContent: "center",
      color: COLORS.light.textBlack,
      width: wp(12),
      height: wp(12),
      borderRadius: 30,
      borderWidth: 1,
      borderColor: COLORS.light.white,
      backgroundColor: "#EB5757"
   },
   ballanceWrapper: {
      position: "absolute",
      right: 0,
      // top: 0,
      bottom: 0,
      justifyContent: "center",
      backgroundColor: COLORS.light.white,
      alignItems: "flex-end",
      overflow: "hidden"
   },
   ballance: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      fontSize: wp(12)
   },
   bold: {
      fontFamily: "Inter-SemiBold"
   }
});
