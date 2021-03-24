import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   onNumberClick: (value: string | number) => void;
   onDelete: () => void;
}

const KeyboardInput = (props: Props) => {
   const [showSnackBar, setShowSnackBar] = useState(false);
   // @ts-ignore
   const copyAccNo = () => {
      //  Clipboard.setString(String(bank.accountNumber));

      setShowSnackBar(true);
      setTimeout(() => {
         setShowSnackBar(false);
      }, 2000);
   };

   return (
      <View style={styles.container}>
         <View style={styles.row}>
            <TouchableOpacity
               onPress={() => props.onNumberClick(1)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(2)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(3)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>3</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               onPress={() => props.onNumberClick(4)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(5)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(6)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>6</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               onPress={() => props.onNumberClick(7)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(8)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(9)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>9</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <TouchableOpacity
               onPress={() => props.onNumberClick(".")}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>{"."}</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onNumberClick(0)}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => props.onDelete()}
               style={styles.itemTouch}
            >
               <Text style={styles.item}>{"<"}</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default KeyboardInput;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flex: 1
   },
   row: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      flex: 1
   },
   itemTouch: {
      marginTop: hp(32),
      marginHorizontal: wp(50)
   },
   item: {
      textAlign: "center",
      fontFamily: "Inter-Medium",
      color: COLORS.light.textBlack,
      fontSize: wp(20),
      lineHeight: hp(24)
   }
});
