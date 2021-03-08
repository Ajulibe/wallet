import React, { useRef } from "react";
import {
   View,
   StyleSheet,
   Text,
   ScrollView,
   SafeAreaView,
   Animated
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
   NavigationTabProp,
   NavigationBottomTabScreenComponent
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import { ROUTES } from "../../../navigation/Routes";
import COLORS from "../../../utils/Colors";

//COMPONENT IMPORTS
import RecentTransactionsView from "./HomeCcreenComponents/RecentTransactionsView";
import QuickOptions from "./HomeCcreenComponents/QuickOptions";
import ImageBackgroundView from "./HomeCcreenComponents/ImageBackgroundView";

//ANIMATION IMPORTS
import { headerHeight } from "./Animation/Constants";
import { BottomViewHeight } from "./Animation/Constants";
import { heroTitleOpacity } from "./Animation/Constants";
import { rewardsTitleOpacity } from "./Animation/Constants";
import { newDivPosition } from "./Animation/Constants";
import { newDivOpacity } from "./Animation/Constants";
import { increaseMarginTop } from "./Animation/Constants";

type Props = {
   navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = ({
   navigation
}) => {
   const ref = useRef<ScrollView | null>(null);
   useScrollToTop(ref);

   const scrollY = useRef(new Animated.Value(0)).current;

   return (
      <>
         <SafeAreaView
            style={{ flex: 0, backgroundColor: COLORS.light.secondary }}
         />
         <Animated.View style={styles.container}>
            <ImageBackgroundView
               newDivOpacity={newDivOpacity}
               headerHeight={headerHeight}
               newDivPosition={newDivPosition}
               heroTitleOpacity={heroTitleOpacity}
               increaseMarginTop={increaseMarginTop}
               rewardsTitleOpacity={rewardsTitleOpacity}
               onPress={() => {
                  navigation.navigate(ROUTES.PROFILE_SCREEN);
               }}
               scrollY={scrollY}
            />

            <Animated.View
               style={[
                  styles.bottomView,
                  {
                     height: BottomViewHeight(scrollY)
                  }
               ]}
            >
               <ScrollView
                  showsVerticalScrollIndicator={false}
                  ref={ref}
                  style={styles.scrollViewStyle}
                  onScroll={Animated.event(
                     [
                        {
                           nativeEvent: {
                              contentOffset: {
                                 y: scrollY
                              }
                           }
                        }
                     ],
                     { useNativeDriver: false }
                  )}
                  scrollEventThrottle={10}
               >
                  <QuickOptions />

                  <View style={{ marginTop: hp("3.57%") }}>
                     <View
                        style={[
                           { width: wp("90%") },
                           styles.mainRewardsContainer
                        ]}
                     >
                        <Text style={styles.recentText}>
                           Recent Transactions
                        </Text>
                        <Text
                           style={[
                              styles.recentText,
                              {
                                 fontSize: wp("3.38%"),
                                 fontFamily: "Inter-Regular"
                              }
                           ]}
                        >
                           View All
                        </Text>
                     </View>

                     <RecentTransactionsView />
                  </View>
               </ScrollView>
            </Animated.View>
         </Animated.View>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      paddingLeft: wp("7.24%"),
      paddingRight: wp("7.24%"),
      alignItems: "center",
      height: hp("100%")
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
   },
   bottomView: {
      backgroundColor: "#ffffff",
      paddingTop: hp("1%"),
      position: "absolute",
      bottom: 0,
      left: 0
   },
   scrollViewStyle: {
      width: wp("90%"),
      height: hp("70%"),
      marginLeft: wp("5%")
   },
   recentText: {
      color: "rgba(128,148,181,1)",
      lineHeight: hp("2.57%"),
      fontSize: wp("3.9%"),
      fontFamily: "Inter-Bold"
   }
});

export default HomeScreen;
