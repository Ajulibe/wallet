import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import COLORS from "../utils/Colors";

interface Props {
   placeHolder: string;
   value?: string;
   errorText?: string;
   onClick: () => any;
}

const InputSelectOption = (props: Props) => {
   const { errorText } = props;

   //color of the text
   let textColor = (): string => {
      if (errorText != "") return COLORS.light.inputTextError;
      else if (props.value == "") return COLORS.light.inputPlaceholder;
      else return COLORS.light.inputText;
   };
   return (
      <View>
         <View
            style={[
               inputStyles.formControl,
               {
                  backgroundColor:
                     errorText != ""
                        ? COLORS.light.inputBgError
                        : COLORS.light.inputBg,
                  borderColor:
                     errorText != ""
                        ? COLORS.light.red
                        : COLORS.light.inputBorder
               }
            ]}
         >
            <Text
               style={[
                  inputStyles.input,
                  {
                     color: textColor()
                  }
               ]}
            >
               {props.value != "" ? props.value : props.placeHolder}
            </Text>
            <AntDesign name="caretdown" size={14} style={{ marginRight: 16 }} />
         </View>

         {errorText != "" && (
            <View style={inputStyles.errorContainer}>
               <Text style={inputStyles.errorText}>{errorText}</Text>
            </View>
         )}
      </View>
   );
};

export default InputSelectOption;

const inputStyles = StyleSheet.create({
   formControl: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 2,
      flexDirection: "row",
      alignItems: "center",
      // marginTop: 8,
      marginBottom: 8,
      backgroundColor: COLORS.light.inputBg,
      borderColor: COLORS.light.inputBorder
   },
   input: {
      flex: 1,
      fontSize: wp("3.73%"),
      fontFamily: "Inter-Regular",
      paddingHorizontal: wp("5.6%"),
      paddingVertical: hp("1.47%"),
      color: COLORS.light.black
   },
   errorContainer: {
      marginVertical: 0
   },
   errorText: {
      marginTop: hp("1%"),
      fontFamily: "Inter-Regular",
      color: COLORS.light.red,
      fontSize: wp("3.5%")
   }
});
