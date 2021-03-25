import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import COLORS from "../utils/Colors";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   check: boolean;
   title: string;
   onClick: () => void;
}

export default function CustomCheckBox(props: Props) {
   const { check, title } = props;
   return (
      <>
         <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <View
               style={[
                  styles.check,
                  {
                     backgroundColor: check
                        ? "#D0FCD2"
                        : COLORS.light.transparent,
                     borderColor: check ? "#D0FCD2" : "#EBEBF2"
                  }
               ]}
            >
               {check && (
                  <MaterialIcons name={"check"} color={"#27AE60"} size={16} />
               )}
            </View>
            <Text style={styles.title}>{title}</Text>
         </TouchableOpacity>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      width: "100%",
      marginTop: hp(16)
      // alignItems: "center",
      // justifyContent: "center",
   },
   check: {
      height: wp(20),
      width: wp(20),
      backgroundColor: COLORS.light.tint,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1
   },
   title: {
      marginLeft: wp(6),
      fontFamily: "Inter-Regular",
      fontSize: wp(12),
      lineHeight: hp(16)
   }
});
