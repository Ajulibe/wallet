import React, { useEffect } from "react";
import {
   View,
   StyleSheet,
   Image,
   Text,
   ScrollView,
   ImageSourcePropType,
   StatusBar,
   TouchableOpacity,
   Platform
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import IMAGES from "../../utils/Images";

type Props = StackScreenProps<
   AuthStackParamList,
   ROUTES.AUTH_GET_STARTED_SCREEN
>;

class AuthValueProposition extends React.PureComponent<Props> {
   // Define your state for your component.
   constructor(props: Props) {
      super(props);
      this.state = {};
   }

   render() {
      // Destruct navigation from props
      const { navigation } = this.props;

      return (
         // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
         <View style={styles.wrapper}>
            {/* <StatusBar
               backgroundColor={COLORS.light.secondary}
               barStyle={"light-content"}
            /> */}

            <View style={styles.container}>
               <View style={styles.body}>
                  <View style={{ alignItems: "center" }}>
                     <Image
                        source={IMAGES["logo"]}
                        style={{
                           height: wp("21.33%"),
                           width: wp("21.33%"),
                           marginBottom: hp("4.31%")
                        }}
                     />
                  </View>

                  <Text style={styles.welcomeText}>Welcome!</Text>

                  <Text style={styles.heading}>
                     Let’s Get{" "}
                     <View style={styles.headingStartedWrapper}>
                        <Text style={styles.headingStarted}>Started.</Text>
                     </View>
                  </Text>
                  <RowItem
                     imgSrc={IMAGES["icon-timer"]}
                     text={
                        <Text style={styles.rowItemText}>
                           Setup an account quick and easy in 30 seconds.{" "}
                        </Text>
                     }
                  />
                  <RowItem
                     imgSrc={IMAGES["icon-user-circle-gear"]}
                     text={
                        <Text style={styles.rowItemText}>
                           Transfer to your friends for free.
                        </Text>
                     }
                  />
                  <RowItem
                     imgSrc={IMAGES["icon-lightning"]}
                     text={
                        <Text style={styles.rowItemText}>
                           Experience payments as simple and fast as sending
                           chats.
                        </Text>
                     }
                  />
                  <RowItem
                     imgSrc={IMAGES["icon-vibrate"]}
                     text={
                        <Text style={styles.rowItemText}>
                           Send and receive money easily using your phone
                           number.
                        </Text>
                     }
                  />
               </View>
               {/* <View style={{ flex: 1 }} /> */}
               <View style={styles.footer}>
                  <CustomButton
                     bgColor={COLORS.light.primary}
                     textColor={COLORS.light.white}
                     btnText={"Get Started"}
                     onClick={() =>
                        navigation.navigate(ROUTES.AUTH_PHONE_NO_SCREEN)
                     }
                  />
                  <View
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                        justifyContent: "center"
                     }}
                  >
                     <Text
                        style={{
                           fontFamily: "Inter-Regular",
                           color: COLORS.light.textBlack
                        }}
                     >
                        Already have an account?{" "}
                     </Text>
                     <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.AUTH_LOGIN)}
                     >
                        <Text style={styles.loginText}>Login</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
         //</ScrollView>
      );
   }
}

function RowItem({
   imgSrc,
   text
}: {
   imgSrc: ImageSourcePropType;
   text: JSX.Element;
}) {
   return (
      <View style={styles.rowItem}>
         <Image source={imgSrc} style={styles.icon} />
         {text}
      </View>
   );
}

export default AuthValueProposition;

const styles = StyleSheet.create({
   wrapper: {
      position: "relative",
      flex: 1,
      backgroundColor: COLORS.light.white
   },
   overlayWrapper: {
      height: hp("29.67%"),
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
   },
   overlayImage: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "cover"
   },
   container: {
      flex: 1,
      height: hp("100%"),
      width: "100%",
      // paddingVertical: hp("8%"),
      paddingTop: Platform.OS ? hp("11.57%") : hp("10%")
   },
   body: {
      paddingHorizontal: wp("9.6%")
   },
   footer: {
      borderTopColor: "#EBEBF2",
      borderTopWidth: 1,
      paddingVertical: hp("2%"),
      // marginTop: hp('2%'),
      paddingHorizontal: wp("9.6%")
   },
   welcomeText: {
      color: "#4B688D",
      fontFamily: "Inter-Regular",
      fontSize: wp("3.73%"),
      lineHeight: hp("2.46%"),
      textAlign: "center",
      marginBottom: hp("2.46%")
   },
   heading: {
      color: "#202F44",
      fontFamily: "Inter-Bold",
      fontSize: wp("7.46%"),
      lineHeight: hp("4.43%"),
      marginBottom: hp("4.43%"),
      textAlign: "center"
   },
   headingStartedWrapper: {
      backgroundColor: "rgba(221,74,10,0.1)",
      borderBottomColor: "rgba(221,74,10,1)",
      borderBottomWidth: 2,
      paddingHorizontal: 4
   },
   headingStarted: {
      color: "#202F44",
      fontFamily: "Inter-Bold",
      fontSize: wp("7.46%"),
      lineHeight: hp("4.43%")
   },
   rowItem: {
      width: "100%",
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: hp("4.06%"),
      flexWrap: "wrap"
   },
   icon: {
      resizeMode: "contain",
      width: wp("8.59%"),
      height: wp("8.59%")
   },
   rowItemText: {
      color: "#202F44",
      fontFamily: "Inter-Regular",
      fontSize: wp("3.73%"),
      lineHeight: hp("2.46%"),
      marginLeft: wp("5.86% "),
      flex: 1
   },
   rowItemBold: {
      color: COLORS.light.secondary,
      fontFamily: "Inter-Bold"
   },
   loginText: {
      fontFamily: "Inter-Medium",
      color: COLORS.light.secondary
   }
});
