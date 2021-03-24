import React from "react";
import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";

interface Props {
   title: any; //title of the list item
   price: string;
}
const MoneyListTile = (props: Props) => {
   return (
      <View style={styles.container}>
         <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
         </View>
         <Text style={styles.price}>{props.price}</Text>
      </View>
   );
};

export default MoneyListTile;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row"
   },
   textContainer: {
      flex: 1,
      justifyContent: "center"
   },
   title: {
      fontFamily: "Inter-Regular",
      lineHeight: hp(24),
      fontSize: wp(14),
      paddingVertical: hp(18),
      color: COLORS.light.textBlack
   },
   price: {
      fontFamily: "Inter-SemiBold",
      lineHeight: hp(14),
      fontSize: wp(14),
      color: COLORS.light.textBlack
   }
});
