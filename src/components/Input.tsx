import React, { useReducer, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import COLORS from "../utils/Colors";

interface Props {
   keyboardType: any;
   secureTextEntry: boolean;
   required: boolean;
   minLength: number;
   maxLength?: number;
   autoCompleteType?: any;
   autoCapitalize: any;
   errorText: string;
   initialValue: string;
   initiallyValid: boolean;
   email?: string | null;
   min?: number | null;
   max?: number | null;
   value?: string | null;
   textContentType: any;
   touched?: boolean;
   returnKeyType: any;
   placeholder?: string;
   placeholderTextColor?: any;
   onInputChange: (value?: string) => void;
   onSubmit: () => void;
}

const Input: React.FC<Props> = (props) => {
   const [borderColor, setBorderColor] = useState(COLORS.light.inputBorder);

   const { onInputChange, onSubmit } = props;

   return (
      <View style={[styles.formControl]}>
         <TextInput
            {...props}
            style={[
               styles.input,
               {
                  borderColor:
                     props.errorText != "" ? COLORS.light.red : borderColor,
                  backgroundColor:
                     props.errorText != ""
                        ? COLORS.light.inputBgError
                        : COLORS.light.inputBg
               }
            ]}
            placeholderTextColor={COLORS.light.inputPlaceholder}
            value={props.value!}
            onChangeText={(newVal) => onInputChange(newVal)}
            onSubmitEditing={() => onSubmit()}
            onBlur={() => setBorderColor(COLORS.light.inputBorder)}
            onFocus={() => setBorderColor(COLORS.light.textBlack)}
         />
         {props.errorText != "" && (
            <View style={styles.errorContainer}>
               <Text style={styles.errorText}>{props.errorText}</Text>
            </View>
         )}
      </View>
   );
};
const styles = StyleSheet.create({
   formControl: {
      width: "100%"
   },
   input: {
      borderRadius: 2,
      backgroundColor: COLORS.light.inputBg,
      fontSize: wp("4.26%"),
      fontFamily: "Inter-Regular",
      paddingHorizontal: wp("5.6%"),
      color: COLORS.light.inputText,
      borderColor: COLORS.light.inputBorder,
      borderWidth: 0.6,
      // height: hp("6.15%"),
      paddingVertical: hp("1.47%")
   },
   errorContainer: {
      marginVertical: 0
   },
   errorText: {
      marginTop: hp("1%"),
      fontFamily: "Inter-Regular",
      color: COLORS.light.red,
      fontSize: 13
   }
});

export default Input;
