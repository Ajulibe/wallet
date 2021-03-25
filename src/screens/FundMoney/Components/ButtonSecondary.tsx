import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
   StyleSheet,
   TouchableOpacity,
   View,
   Text,
   Image,
   GestureResponderEvent,
   Animated,
   Easing
} from "react-native";
import { hp, wp } from "../../../utils/Dimensions";

type Props = {
   onClick: (event: GestureResponderEvent) => void;
};

export default function ButtonSecondary(props: Props) {
   return (
      <TouchableOpacity onPress={props.onClick}>
         <View style={[styles.btn]}>
            <Ionicons
               name={"swap-horizontal-sharp"}
               color={"#2D4875"}
               size={16}
            />
            <Text style={[styles.title]}>Change payment method</Text>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   btn: {
      width: "100%",
      borderRadius: 4,
      paddingVertical: hp(16),
      marginTop: hp(16),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#ACC1D1",
      borderWidth: 1
   },
   title: {
      textAlign: "center",
      fontFamily: "Inter-Medium",
      fontSize: wp(14),
      lineHeight: hp(16),
      marginLeft: wp(12),
      color: "#2D4875"
   }
});
