import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
   CodeField,
   Cursor,
   useBlurOnFulfill,
   useClearByFocusCell
} from "react-native-confirmation-code-field";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import COLORS from "../utils/Colors";

interface Props {
   cellCount: number;
   initialValue?: string;
   errorText?: string;
   pinVisible?: boolean;
   onTextInputChange: (code: string) => any;
}

const InputPin = ({
   cellCount,
   initialValue = "",
   errorText,
   pinVisible = false,
   onTextInputChange
}: Props) => {
   const [value, setValue] = useState(initialValue);
   const ref = useBlurOnFulfill({ value, cellCount: cellCount });
   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue
   });
   const renderCell = ({
      index,
      symbol,
      isFocused
   }: {
      index: number;
      symbol: string;
      isFocused: boolean;
   }) => {
      let textChild = (
         <Text
            style={{
               fontFamily: "Inter-Regular",
               color: "rgba(166,172,180,0.1)"
            }}
         >
            0
         </Text>
      );

      if (symbol) {
         textChild = pinVisible ? (
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  textAlignVertical: "center"
               }}
            >
               {symbol}
            </Text>
         ) : (
            <Text style={{ fontSize: 18 }}>●</Text>
         );
      } else if (isFocused) {
         textChild = <Cursor cursorSymbol={"0"} />;
      }

      return (
         <Text
            key={index}
            style={[
               styles.cell,
               isFocused && styles.focusCell,
               errorText?.length != 0 && styles.errorCell
            ]}
            onLayout={getCellOnLayoutHandler(index)}
         >
            {textChild}
         </Text>
      );
   };

   useEffect(() => {
      onTextInputChange(value);
      return () => {
         // cleanup
      };
   }, [value]);

   return (
      <View style={styles.container}>
         <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={cellCount}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
            rootStyle={styles.codeFieldRoot}
            // placeholder={"0"}
            // placeholderTextColor={COLORS.light.inputText}
         />
         {errorText?.length != 0 && (
            <View style={styles.errorContainer}>
               <Text style={styles.errorText}>{errorText}</Text>
            </View>
         )}
      </View>
   );
};

export default InputPin;

const styles = StyleSheet.create({
   container: {
      marginBottom: hp("2.69%"),
      marginTop: 8
   },
   codeFieldRoot: {
      justifyContent: "flex-start"
      // alignSelf: 'center'
   },
   cell: {
      width: wp("14.3%"),
      height: hp("5.91%"),
      lineHeight: hp("5.91%"),
      fontSize: 24,
      borderRadius: 2,
      borderColor: COLORS.light.inputBorder,
      borderWidth: 1,
      backgroundColor: COLORS.light.inputOtpBg,
      textAlign: "center",
      marginRight: wp("4%")
   },
   focusCell: {
      borderColor: COLORS.light.textBlack,
      borderWidth: 1
   },
   errorCell: {
      borderColor: COLORS.light.inputBorderError,
      backgroundColor: COLORS.light.inputBgError
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
