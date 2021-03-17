import React from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   leading: ImageSourcePropType; //The leading image icon
   title: any; //title of the list item
   subtitle?: any;
   trailing?: JSX.Element; //the trailing/end icon
   onClick: (param?: any) => void; //list click listener
}
const ListTile = (props: Props) => {
   return (
      <TouchableOpacity
         onPress={() => props.onClick()}
         style={styles.container}
      >
         <Image source={props.leading} style={styles.leading} />
         <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subtitle && (
               <Text style={styles.subtitle}>{props.subtitle}</Text>
            )}
         </View>
         {props.trailing == null ? (
            <MaterialIcons name="keyboard-arrow-right" size={18} />
         ) : (
            props.trailing
         )}
      </TouchableOpacity>
   );
};

export default ListTile;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(12)
   },
   leading: {
      width: wp(32),
      height: hp(29)
   },
   textContainer: {
      flex: 1,
      marginHorizontal: wp(21),
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-Medium",
      lineHeight: hp(16),
      fontSize: wp(14),
      color: COLORS.light.textBlack
   },
   subtitle: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      fontSize: wp(10),
      color: COLORS.light.textBlackLight
   },
   trailing: {
      width: wp(5.56),
      height: hp(9)
   }
});
