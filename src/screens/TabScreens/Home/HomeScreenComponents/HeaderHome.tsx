import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
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
   navigation?: any; //list click listener
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
   return (
      <>
         <View style={styles.container}>
            <View style={styles.textContainer}>
               <Text style={styles.title}>{props.title}</Text>
               {props.subtitle && (
                  <Text style={styles.subtitle}>{props.subtitle}</Text>
               )}
            </View>

            <TouchableOpacity
               onPress={onNotificationClick}
               style={styles.trailingWrapper}
            >
               <Image
                  source={IMAGES["icon-notification"]}
                  style={styles.image}
               />
               <View style={styles.notificationDot} />
            </TouchableOpacity>
            {props.trailing != null && props.trailing}
         </View>
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
   }
});
