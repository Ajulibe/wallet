import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Animated,
   Image
} from "react-native";
import COLORS from "../../../utils/Colors";
import { hp, wp } from "../../../utils/Dimensions";

interface Props {
   activeIndex: number;
   onSendToWalletClick: () => void;
   onSendToBankClick: () => void;
}

const TabBar: React.FC<Props> = (props) => {
   const { activeIndex } = props;
   return (
      <Animated.View>
         <View style={styles.wallet}>
            <TouchableOpacity
               onPress={props.onSendToWalletClick}
               style={[
                  styles.walletCol,
                  {
                     borderBottomColor:
                        activeIndex == 0
                           ? COLORS.light.primary
                           : COLORS.light.transparent
                  }
               ]}
            >
               <Ionicons
                  name={"wallet-outline"}
                  size={20}
                  color={
                     activeIndex == 0
                        ? COLORS.light.primary
                        : COLORS.light.tabBarInactive
                  }
               />
               <Text
                  style={[
                     styles.walletColText,
                     {
                        color:
                           activeIndex == 0
                              ? COLORS.light.textBlack
                              : COLORS.light.tabBarInactive
                     }
                  ]}
               >
                  Send to Wallet
               </Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity
               onPress={props.onSendToBankClick}
               style={[
                  styles.walletCol,
                  {
                     borderBottomColor:
                        activeIndex == 1
                           ? COLORS.light.primary
                           : COLORS.light.transparent
                  }
               ]}
            >
               <MaterialCommunityIcons
                  name={"bank-outline"}
                  size={20}
                  color={
                     activeIndex == 1
                        ? COLORS.light.primary
                        : COLORS.light.tabBarInactive
                  }
               />
               <Text
                  style={[
                     styles.walletColText,
                     {
                        color:
                           props.activeIndex == 1
                              ? COLORS.light.textBlack
                              : COLORS.light.tabBarInactive
                     }
                  ]}
               >
                  Bank Account
               </Text>
            </TouchableOpacity>
         </View>
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      alignItems: "center"
   },
   wallet: {
      flexDirection: "row",
      width: "100%",
      borderBottomColor: COLORS.light.tabBarInactive,
      borderBottomWidth: 1,
      borderTopColor: COLORS.light.tabBarInactive,
      borderTopWidth: 1
   },
   walletCol: {
      flex: 1,
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(18),
      borderBottomWidth: 2
   },
   walletColIcon: {
      width: wp(20),
      height: wp(20)
   },
   walletColText: {
      color: COLORS.light.white,
      marginLeft: wp(9),
      fontFamily: "Inter-Regular",
      lineHeight: hp(18),
      fontSize: wp(14)
   },
   verticalLine: {
      backgroundColor: "rgba(235,235,242,1)",
      height: hp(54),
      width: 1
   }
});

export default TabBar;
