import React from "react";
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Animated,
   Image
} from "react-native";
import COLORS from "../../../../utils/Colors";
import { hp, wp } from "../../../../utils/Dimensions";
import IMAGES from "../../../../utils/Images";

interface Props {
   onFundWalletClick: () => void;
   onSendMoneyClick: () => void;
}

const WalletAction: React.FC<Props> = (props) => {
   return (
      <Animated.View>
         <View style={styles.wallet}>
            <TouchableOpacity
               onPress={props.onFundWalletClick}
               style={[
                  styles.walletCol,
                  {
                     backgroundColor: "rgba(39,174,96,0.1)"
                  }
               ]}
            >
               <Image
                  source={IMAGES["icon-home-wallet"]}
                  style={styles.walletColIcon}
               />
               <Text
                  style={[
                     styles.walletColText,
                     { color: COLORS.light.primary }
                  ]}
               >
                  Fund Wallet
               </Text>
            </TouchableOpacity>
            <View style={{ width: wp(13) }} />
            <TouchableOpacity
               onPress={props.onSendMoneyClick}
               style={[
                  styles.walletCol,
                  {
                     backgroundColor: "rgba(254,75,75,0.1)"
                  }
               ]}
            >
               <Image
                  source={IMAGES["icon-home-send"]}
                  style={styles.walletColIcon}
               />
               <Text
                  style={[styles.walletColText, { color: "rgba(254,75,75,1)" }]}
               >
                  Send Money
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
      width: "100%"
   },
   walletCol: {
      flex: 1,
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 4,
      paddingVertical: hp(12),
      paddingHorizontal: 4
   },
   walletColIcon: {
      width: wp(20),
      height: wp(20)
   },
   walletColText: {
      color: COLORS.light.white,
      marginLeft: wp(9),
      fontFamily: "Inter-Regular",
      lineHeight: hp(24),
      fontSize: wp(14)
   }
});

export default WalletAction;
