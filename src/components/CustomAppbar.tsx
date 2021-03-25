import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   onBackPress?: () => void; //Back button press
   title: any; //title of the app bar
   subtitle?: any; // Appbar subtitle
   trailing?: JSX.Element; //the trailing/end icon(s)
   //    navigation?: StackNavigationProp<any, any>; //list click listener
   navigation?: any; //list click listener
}
const CustomAppbar = (props: Props) => {
   const onBackPress = () => {
      if (props.onBackPress == null) {
         //default back button behavior
         props.navigation?.goBack();
      } else {
         //Overriding the back buton from the screen
         props.onBackPress();
      }
   };
   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={onBackPress} style={styles.leading}>
            <MaterialIcons
               name="keyboard-arrow-left"
               size={24}
               color={COLORS.light.textBlackLight}
            />
            <Text style={styles.backText}>Back</Text>
         </TouchableOpacity>

         <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subtitle && (
               <Text style={styles.subtitle}>{props.subtitle}</Text>
            )}
         </View>
         <View style={styles.trailing}>
            {props.trailing != null && props.trailing}
         </View>
      </View>
   );
};

export default CustomAppbar;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(16),
      paddingHorizontal: wp(30),
      height: hp(60),
      borderBottomColor: "rgba(32,47,68,.06)",
      borderBottomWidth: 0.8
   },
   leading: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   backText: {
      fontSize: wp(12),
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      color: COLORS.light.textBlackLight
   },
   textContainer: {
      flex: 1,
      // marginLeft: wp(21),
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-Medium",
      lineHeight: hp(24),
      fontSize: wp(16),
      textAlign: "center",
      color: COLORS.light.textBlack
   },
   subtitle: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      fontSize: wp(10),
      color: COLORS.light.textBlackLight
   },
   trailing: {
      // flexDirection: "row",
      alignItems: "flex-end",
      minWidth: 50
   }
});
