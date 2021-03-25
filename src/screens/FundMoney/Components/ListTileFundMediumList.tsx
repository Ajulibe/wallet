import React from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../../../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { hp, wp } from "../../../utils/Dimensions";

interface Props {
   leading: ImageSourcePropType; //The leading image icon
   bgColor: string;
   title: string; //title of the list item
   subtitle: string;
   onClick: (param?: any) => void; //list click listener
}
const ListTileFundMediumList = (props: Props) => {
   return (
      <TouchableOpacity
         onPress={() => props.onClick()}
         style={styles.container}
      >
         <View
            style={[styles.leadingWrapper, { backgroundColor: props.bgColor }]}
         >
            <Image source={props.leading} style={styles.leading} />
         </View>

         <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subtitle && (
               <Text style={styles.subtitle}>{props.subtitle}</Text>
            )}
         </View>
      </TouchableOpacity>
   );
};

export default ListTileFundMediumList;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(16),
      borderBottomColor: "rgba(32,47,68,0.05)",
      borderBottomWidth: 1
   },
   leadingWrapper: {
      width: wp(45),
      height: wp(45),
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center"
   },
   leading: {
      width: wp(18),
      height: wp(18)
   },
   textContainer: {
      flex: 1,
      marginHorizontal: wp(12),
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-SemiBold",
      lineHeight: hp(18),
      fontSize: wp(14),
      marginBottom: hp(6),
      color: COLORS.light.textBlack
   },
   subtitle: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      fontSize: wp(12),
      color: COLORS.light.textBlack50
   },
   trailing: {
      width: wp(5.56),
      height: hp(9)
   }
});
