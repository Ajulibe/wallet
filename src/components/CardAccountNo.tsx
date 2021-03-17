import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Clipboard } from "react-native";
import { Text } from "react-native-animatable";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../utils/Dimensions";
import { Snackbar } from "react-native-paper";
import { BankUser } from "../store/types/AuthTypes";

const CardAccountNo = ({ bank }: { bank: BankUser }) => {
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
      <View style={styles.cardWrapper}>
         <View style={styles.cardWrapper}>
            <View style={styles.row}>
               <View>
                  <Text style={styles.rowTitle}>Account no</Text>
                  <Text style={styles.rowSubtitle}>30896523412</Text>
               </View>
               <Image
                  source={{
                     uri: `https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg`
                  }}
                  style={styles.bankLogo}
               />
            </View>
            <View style={{ height: hp(18) }} />
            <View style={styles.row}>
               <View>
                  <Text style={styles.rowTitle}>Account name</Text>
                  <Text style={styles.rowSubtitle}>Jane Doe</Text>
               </View>
               <TouchableOpacity onPress={copyAccNo}>
                  <Ionicons
                     name="ios-copy"
                     size={24}
                     color={COLORS.light.textBlack40}
                  />
               </TouchableOpacity>
            </View>
         </View>
         <Snackbar
            visible={showSnackBar}
            onDismiss={() => setShowSnackBar(false)}
            action={{
               label: "CLOSE",
               onPress: () => setShowSnackBar(false)
            }}
            style={{ backgroundColor: COLORS.light.black }}
         >
            <View>
               <Text
                  style={{
                     color: COLORS.light.white,
                     fontFamily: "Inter-Medium"
                  }}
               >
                  Account Number Copied
               </Text>
            </View>
         </Snackbar>
      </View>
   );
};

export default CardAccountNo;

const styles = StyleSheet.create({
   container: {
      width: "100%"
   },
   cardWrapper: {
      width: "100%",
      paddingHorizontal: wp(12),
      paddingVertical: hp(12),
      backgroundColor: "#F2F6F8",
      borderRadius: 4
   },
   row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   rowTitle: {
      color: COLORS.light.textBlack50,
      fontSize: wp(12),
      lineHeight: hp(16),
      fontFamily: "Inter-Regular",
      marginBottom: 2
   },
   rowSubtitle: {
      color: COLORS.light.textBlack,
      fontSize: wp(14),
      lineHeight: hp(16),
      fontFamily: "Inter-Medium"
   },
   bankLogo: {
      height: wp(32),
      width: wp(32)
   }
});
