import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import {
   StyleSheet,
   TouchableOpacity,
   View,
   Text,
   Image,
   GestureResponderEvent,
   Animated,
   Easing
} from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp
} from "react-native-responsive-screen";
import IMAGES from "../utils/Images";

type Props = {
   bgColor: string;
   textColor: string;
   btnText: string;
   onClick: (event: GestureResponderEvent) => void;
   isLoading?: boolean;
};

export default function Button(props: Props) {

   let rotateValueHolder = new Animated.Value(0);

   useEffect(() => {
      if (props.isLoading) {
         startImageRotateFunction()
      }
   }, [props.isLoading])

   const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
         toValue: 1,
         duration: 1000,
         easing: Easing.linear,
         useNativeDriver: false,
      }).start(() => startImageRotateFunction());
   };

   const RotateData = rotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
   });

   return (
      <TouchableOpacity onPress={props.onClick}>
         <View
            style={[styles.btn, { backgroundColor: props.bgColor }]}
            pointerEvents={!props.isLoading ? "none" : "auto"}
         >
            {props.isLoading ? (
               <Animated.Image
                  source={IMAGES.loading}
                  style={[
                     styles.image,
                     { transform: [{ rotate: RotateData }] }
                  ]}
               />
            ) : (
               <Text style={[styles.title, { color: props.textColor }]}>
                  {props.btnText}
               </Text>
            )}
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   btn: {
      width: "100%",
      borderRadius: 4,
      paddingVertical: hp("1.72%"),
      marginTop: hp("5%"),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   title: {
      textAlign: "center",
      fontFamily: "Inter-Medium",
      fontSize: wp("3.37%")
   },
   image: {
      width: wp("6%"),
      height: wp("6%"),
      marginRight: 6
   }
});
