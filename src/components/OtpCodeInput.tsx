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
   onTextInputChange: (code?: string) => any;
}

const OtpCodeInput = ({
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
               color: COLORS.light.muted
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
                  color: COLORS.light.inputText,
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
               cellCount > 4 && styles.cell6Cell,
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
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
         />
         {errorText?.length != 0 && (
            <View style={styles.errorContainer}>
               <Text style={styles.errorText}>{errorText}</Text>
            </View>
         )}
      </View>
   );
};

export default OtpCodeInput;

const styles = StyleSheet.create({
   container: {
      marginBottom: hp("3.69%"),
      marginTop: 8
   },
   title: {
      textAlign: "center",
      fontSize: 30
   },
   codeFieldRoot: {
      // marginBottom: 30,
      // marginTop: 8
   },
   cell: {
      width: 50,
      height: 50,
      lineHeight: 44,
      fontSize: 24,
      borderRadius: 4,
      // borderColor: COLORS.light.inputBorder,
      borderColor: "rgba(0,63,136,0.05)",
      borderWidth: 1,
      backgroundColor: COLORS.light.inputBg,
      textAlign: "center"
   },
   cell6Cell: {
      width: wp("16%"),
      height: wp("16%"),
      lineHeight: wp("16%"),
      fontSize: 25
   },
   focusCell: {
      borderColor: COLORS.light.secondary,
      borderWidth: 2
   },
   errorCell: {
      borderColor: COLORS.light.red
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
