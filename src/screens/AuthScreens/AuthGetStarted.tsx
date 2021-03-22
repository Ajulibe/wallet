import React, { useEffect } from "react";
import {
   View,
   StyleSheet,
   Image,
   Text,
   ScrollView,
   Dimensions,
   TouchableOpacity,
   ImageSourcePropType,
   StatusBar,
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
import Carousel, { Pagination } from "react-native-snap-carousel";
import * as Animatable from "react-native-animatable";
type Props = StackScreenProps<
   AuthStackParamList,
   ROUTES.AUTH_GET_STARTED_SCREEN
>;
type State = {
   activeIndex: any;
   flicker: boolean;
   carouselItems: any;
};
const { width, height } = Dimensions.get("window");

class AuthGetStarted extends React.PureComponent<Props, State> {
   // Define your state for your component.
   constructor(props: Props) {
      super(props);
      this.state = {
         activeIndex: 0,
         flicker: true,
         carouselItems: [
            {
               title: "Quick Setup",
               image: IMAGES["slide1"],
               text:
                  "Setup an account quick and easy in less than 30" +
                  " seconds and start sending and receiving payments immediately!!"
            },
            {
               title: "Pay on the GO",
               image: IMAGES["slide2"],
               text:
                  "Experience payments as simple and fast as sending chats, " +
                  "your payments just got a lot chattier!!"
            }
         ]
      };
   }
   // @ts-ignore
   _renderItem({ item, index }) {
      return (
         <View
            style={{
               height: "100%",
               justifyContent: "space-between",
               padding: 20
            }}
         >
            <Animatable.View
               key={index}
               animation={"slideInRight"}
               easing={"ease-out-cubic"}
            >
               <Image
                  source={item.image}
                  resizeMode={"contain"}
                  style={{
                     height: 150,
                     width: "100%",
                     alignSelf: "flex-start"
                  }}
               />
            </Animatable.View>
            <View>
               <Text style={styles.rowItemBold}>{item.title}</Text>
               <Text style={styles.rowItemText}>{item.text}</Text>
            </View>
         </View>
      );
   }

   render() {
      // Destruct navigation from props
      const { navigation } = this.props;
      const { activeIndex, carouselItems } = this.state;

      return (
         <View style={{ flex: 1 }}>
            <View style={styles.wrapper}>
               {/* <StatusBar
                  backgroundColor={COLORS.light.secondary}
                  barStyle={"light-content"}
               /> */}

               <View style={styles.container}>
                  <View style={{ alignItems: "center" }}>
                     <Image
                        source={IMAGES["logo"]}
                        style={{ height: wp("28%"), width: wp("28%") }}
                     />
                  </View>
                  {/* <View style={{ height: "60%", width: "100%" }}>
                     <Carousel
                        layout={"default"}
                        data={carouselItems}
                        sliderWidth={width * 0.85}
                        itemWidth={width * 0.85}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) =>
                           this.setState({ activeIndex: index, flicker: false })
                        }
                     /> */}

                  <View style={{ height: "60%", width: "100%" }}>
                     <Carousel
                        data={carouselItems}
                        renderItem={this._renderItem}
                        loop={true}
                        sliderWidth={width * 0.85}
                        itemWidth={width * 0.85}
                        autoplay={true}
                        enableMomentum={false}
                        lockScrollWhileSnapping={true}
                        onSnapToItem={(index) =>
                           this.setState({ activeIndex: index })
                        }
                     />
                     {/* {this.pagination} */}
                  </View>
                  {/* </View> */}

                  {/* <View style={{ flex: 1 }} /> */}
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
                     <Text>Already have an account? </Text>
                     <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.AUTH_LOGIN)}
                     >
                        <Text style={{ fontFamily: "Inter-Medium" }}>
                           Login
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
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

export default AuthGetStarted;

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
      opacity: 0.6,
      height: "100%",
      resizeMode: "cover"
   },
   container: {
      flex: 1,
      height: hp("100%"),
      width: "100%",
      paddingHorizontal: wp("8%"),
      paddingVertical: hp("8%")
      // paddingTop: Platform.OS ? hp('4%') : hp('8%')
   },

   rowItem: {
      width: "100%",
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: hp("6.7%"),
      flexWrap: "wrap"
   },
   icon: {
      resizeMode: "contain",
      width: wp("8.59%"),
      height: wp("8.59%")
   },
   rowItemText: {
      fontFamily: "Inter-Regular",
      fontSize: wp("3.9%"),
      color: "#55585A",
      lineHeight: hp("3.2%")
   },
   rowItemBold: {
      fontFamily: "Inter-Bold",
      fontSize: wp("6.8%"),
      marginBottom: 10,
      color: "#FF5703"
   }
});
