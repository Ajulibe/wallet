import React from "react";
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Animated
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import COLORS from "../../../../utils/Colors";

const HomeScreen: React.FC = () => {
   return (
      <Animated.View style={styles.quickOptionsDiv}>
         <TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
               <View style={styles.topUpDiv}>
                  <Ionicons
                     name="ios-add"
                     size={24}
                     color={COLORS.light.secondary}
                  />
               </View>
               <Text style={styles.quickOptionsText}>Top Up</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity>
            <View>
               <View style={styles.transferDiv}>
                  <AntDesign
                     name="arrowup"
                     size={20}
                     color={COLORS.light.secondary}
                  />
               </View>
               <Text style={styles.quickOptionsText}>Transfer</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity>
            <View>
               <View style={styles.withdrawDiv}>
                  <Ionicons
                     name="ios-wallet-outline"
                     size={20}
                     color={COLORS.light.secondary}
                  />
               </View>
               <Text style={styles.quickOptionsText}>Withdraw</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity>
            <View>
               <View style={styles.moreDiv}>
                  <Feather
                     name="more-horizontal"
                     size={20}
                     color={COLORS.light.secondary}
                  />
               </View>
               <Text style={styles.quickOptionsText}>More..</Text>
            </View>
         </TouchableOpacity>
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   quickOptionsDiv: {
      backgroundColor: "#ffffff",
      width: wp("90%"),
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: hp("1.24%")
   },
   topUpDiv: {
      height: wp("14.5%"),
      width: wp("14.5%"),
      backgroundColor: COLORS.light.white,
      borderRadius: wp("2.41%"),
      justifyContent: "center",
      alignItems: "center",
      borderColor: COLORS.light.secondary,
      borderWidth: 0.2
   },
   transferDiv: {
      height: wp("14.5%"),
      width: wp("14.5%"),
      backgroundColor: COLORS.light.white,
      borderRadius: wp("2.41%"),
      justifyContent: "center",
      alignItems: "center",
      borderColor: COLORS.light.secondary,
      borderWidth: 0.2
   },
   quickOptionsText: {
      color: "#00296B",
      fontSize: wp("2.41%"),
      textAlign: "center",
      marginTop: hp("0.56%"),
      lineHeight: hp("2.12%"),
      fontFamily: "Inter-Regular"
   },
   withdrawDiv: {
      height: wp("14.5%"),
      width: wp("14.5%"),
      backgroundColor: COLORS.light.white,
      borderRadius: wp("2.41%"),
      justifyContent: "center",
      alignItems: "center",
      borderColor: COLORS.light.secondary,
      borderWidth: 0.2
   },
   moreDiv: {
      height: wp("14.5%"),
      width: wp("14.5%"),
      backgroundColor: COLORS.light.white,
      borderRadius: wp("2.41%"),
      justifyContent: "center",
      alignItems: "center",
      borderColor: COLORS.light.secondary,
      borderWidth: 0.2
   }
});

export default HomeScreen;
