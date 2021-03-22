import React from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   leading: string; //The leading image icon
   title: any; //title of the list item
   subtitle?: any;
   onDeleteClick: (param?: any) => void; //list click listener
}
const ListTileCardPayment = (props: Props) => {
   return (
      <View style={styles.container}>
         <Image
            source={{
               uri: props.leading
            }}
            style={styles.leading}
         />
         <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subtitle && (
               <Text style={styles.subtitle}>{props.subtitle}</Text>
            )}
         </View>
         <TouchableOpacity onPress={() => props.onDeleteClick()}>
            <AntDesign
               name="delete"
               color={COLORS.light.textBlack50}
               size={18}
            />
         </TouchableOpacity>
      </View>
   );
};

export default ListTileCardPayment;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(12)
   },
   leading: {
      width: wp(32),
      height: hp(32),
      borderRadius: 4
   },
   textContainer: {
      flex: 1,
      marginHorizontal: wp(21),
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(16),
      fontSize: wp(12),
      color: COLORS.light.textBlackLight
   },
   subtitle: {
      fontFamily: "Inter-Medium",
      lineHeight: hp(16),
      fontSize: wp(14),
      color: COLORS.light.textBlack
   },
   trailing: {
      width: wp(5.56),
      height: hp(9)
   }
});
