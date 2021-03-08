import React from "react";
import {
   View,
   StyleSheet,
   Text,
   Image,
   TouchableOpacity,
   ImageBackground,
   Animated
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import IMAGES from "../../../../utils/Images";
import COLORS from "../../../../utils/Colors";

interface Props {
   headerHeight: any;
   newDivPosition: any;
   newDivOpacity: any;
   rewardsTitleOpacity: any;
   heroTitleOpacity: any;
   increaseMarginTop: any;
   onPress?: (() => any) | undefined;
   scrollY: Animated.Value;
}

const HomeScreen: React.FC<Props> = ({
   headerHeight,
   newDivPosition,
   newDivOpacity,
   heroTitleOpacity,
   increaseMarginTop,
   rewardsTitleOpacity,
   onPress,
   scrollY
}) => {
   return (
      <Animated.View
         style={[
            styles.ImageBackgroundContainer,
            {
               height: headerHeight(scrollY),
               backgroundColor: COLORS.light.secondary,
               shadowColor: COLORS.light.tint
            }
         ]}
      >
         <ImageBackground
            source={require("../../../../assets/images/mask.png")}
            style={styles.ImageBackground}
         >
            <Animated.View
               style={[
                  styles.avatarContainer,
                  {
                     top: newDivPosition(scrollY),
                     opacity: newDivOpacity(scrollY)
                  }
               ]}
            >
               <View
                  style={[
                     styles.contentContainer,
                     { backgroundColor: COLORS.light.secondary }
                  ]}
               >
                  <View style={styles.contentSubContainer}>
                     <TouchableOpacity onPress={onPress}>
                        <Image
                           source={IMAGES.newAvatar}
                           style={{ width: wp("10.39%"), height: wp("10.39%") }}
                        />
                     </TouchableOpacity>
                  </View>

                  <View
                     style={{
                        justifyContent: "center"
                     }}
                  >
                     <Text style={styles.amountText}>{"\u20A6"} 00.00</Text>
                  </View>
               </View>

               <View style={styles.Notification}>
                  <TouchableOpacity>
                     <Image source={IMAGES.bells} style={styles.notification} />
                  </TouchableOpacity>
               </View>
            </Animated.View>
            <Animated.View
               style={[
                  styles.mainRewardsContainer,
                  {
                     width: wp("90%"),
                     opacity: heroTitleOpacity(scrollY)
                  }
               ]}
            >
               <TouchableOpacity onPress={onPress}>
                  <View style={styles.contentContainer}>
                     <Animated.View
                        style={[
                           styles.contentSubContainer,
                           {
                              marginTop: increaseMarginTop(scrollY)
                           }
                        ]}
                     >
                        <Image
                           source={IMAGES.newAvatar}
                           style={{ width: wp("10.39%"), height: wp("10.39%") }}
                        />
                     </Animated.View>

                     <Animated.View
                        style={{
                           justifyContent: "center",
                           marginTop: increaseMarginTop(scrollY)
                        }}
                     >
                        <Text style={styles.profileName}>Hi Jane</Text>
                        <Text
                           style={[
                              styles.welcomeMessage,
                              { color: COLORS.light.white }
                           ]}
                        >
                           Welcome Back!
                        </Text>
                     </Animated.View>
                  </View>
               </TouchableOpacity>

               <Animated.View
                  style={[
                     styles.Notification,
                     { marginTop: increaseMarginTop(scrollY) }
                  ]}
               >
                  <TouchableOpacity>
                     <Image source={IMAGES.bells} style={styles.bells} />
                  </TouchableOpacity>
               </Animated.View>
            </Animated.View>
            <Animated.View
               style={[
                  styles.totalBalanceContainer,
                  { opacity: heroTitleOpacity(scrollY) }
               ]}
            >
               <Text style={styles.newRewards}>Total Balance</Text>
               <Text style={styles.balanceAmount}>{"\u20A6"} 00.00</Text>
            </Animated.View>
         </ImageBackground>
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   contentContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: wp("33%")
   },
   profileName: {
      fontSize: wp("4.35%"),
      fontFamily: "Inter-Bold",
      color: COLORS.light.white
   },
   welcomeMessage: {
      color: COLORS.light.white,
      textAlign: "center",
      fontSize: wp("2.9%"),
      fontFamily: "Inter-Regular",
      lineHeight: hp("2.12%")
   },
   Notification: {
      width: wp("10%"),
      height: wp("10%"),
      borderColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center"
   },
   ImageBackgroundContainer: {
      width: wp("100%"),
      borderBottomLeftRadius: wp("7.25%"),
      borderBottomRightRadius: wp("7.25%"),
      alignItems: "center",
      shadowOffset: {
         width: 0,
         height: 0
      },

      shadowOpacity: 0.1,
      shadowRadius: 1
   },
   ImageBackground: {
      flex: 1,
      marginTop: hp("0.5%")
      //justifyContent: "center"
   },
   avatarContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      width: wp("90%")
   },
   contentSubContainer: {
      justifyContent: "center",
      alignItems: "center"
   },
   amountText: {
      color: COLORS.light.white,
      textAlign: "center",
      fontSize: wp("7%"),
      fontFamily: "Inter-Bold",
      lineHeight: hp("4.35%")
   },
   notification: {
      width: wp("3.22%"),
      height: hp("1.67%%"),
      tintColor: COLORS.light.secondary
   },
   bells: {
      width: wp("3.22%"),
      height: hp("1.67%%"),
      tintColor: COLORS.light.white
   },
   totalBalanceContainer: {
      marginTop: hp("2.46%"),
      alignItems: "center",
      height: hp("12%")
   },
   balanceAmount: {
      color: COLORS.light.white,
      textAlign: "center",
      fontSize: wp("10%"),
      fontFamily: "Inter-Bold",
      lineHeight: hp("5.35%"),
      marginTop: hp("0.3%")
   },
   mainHeadingContainer: {
      marginTop: hp("4.68%"),
      height: hp("7.59%"),
      width: wp("90%"),
      backgroundColor: "rgba(0,21,56,0.2)",
      borderRadius: wp("3.62%"),
      justifyContent: "center",
      paddingLeft: wp("4.5%"),
      paddingRight: wp("4.5%"),
      borderColor: "rgba(0,21,56,0.4)",
      borderWidth: 0.2,
      shadowOffset: {
         width: 0,
         height: 0
      },
      shadowColor: "#00296B",
      shadowOpacity: 1
   },
   mainRewardsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   giftImage: {
      resizeMode: "contain",
      width: hp("1.82%"),
      height: hp("1.82%"),
      tintColor: "#ffffff"
   },
   newRewards: {
      color: "#ffffff",
      textAlign: "center",
      fontSize: wp("3.38%"),
      fontFamily: "Inter-Regular",
      lineHeight: hp("2.57%")
   }
});

export default HomeScreen;
