import { Animated, Easing } from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";

//ANIMATION VARIABLES
const HEADER_EXPANDED_HEIGHT = hp("24.26%");
const HEADER_COLLAPSED_HEIGHT = hp("12.83%");
const BODY_EXPANDED_HEIGHT = hp("84.67%");
const BODY_COLLAPSED_HEIGHT = hp("73.67%");
const INVISIBLE_POSITION = -hp("30%");
const VISIBLE_POSITION = hp("0");
const FASTER_OPACITY_REDUCTION = hp("32.83%");

export const headerHeight = (scroll: Animated.Value) => {
   const headerHeight = scroll.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - hp("20.83%")],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return headerHeight;
};

export const BottomViewHeight = (scroll: Animated.Value) => {
   const BottomViewHeight = scroll.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [BODY_COLLAPSED_HEIGHT, BODY_EXPANDED_HEIGHT],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return BottomViewHeight;
};

export const headerTitleOpacity = (scroll: Animated.Value) => {
   const headerTitleOpacity = scroll.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - hp("8.83%")],
      outputRange: [0, 1],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return headerTitleOpacity;
};

export const heroTitleOpacity = (scroll: Animated.Value) => {
   const heroTitleOpacity = scroll.interpolate({
      inputRange: [0, hp("2%")],
      outputRange: [1, 0],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return heroTitleOpacity;
};

export const rewardsTitleOpacity = (scroll: Animated.Value) => {
   const rewardsTitleOpacity = scroll.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - FASTER_OPACITY_REDUCTION],
      outputRange: [1, 0],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return rewardsTitleOpacity;
};

export const newDivPosition = (scroll: Animated.Value) => {
   const newDivPosition = scroll.interpolate({
      inputRange: [0, hp("14%")],
      outputRange: [INVISIBLE_POSITION, VISIBLE_POSITION],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return newDivPosition;
};

export const newDivOpacity = (scroll: Animated.Value) => {
   const newDivOpacity = scroll.interpolate({
      inputRange: [0, hp("4%")],
      outputRange: [0, 1],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return newDivOpacity;
};

export const increaseMarginTop = (scroll: Animated.Value) => {
   const increaseMarginTop = scroll.interpolate({
      inputRange: [0, hp("4%")],
      outputRange: [hp("0%"), hp("10%")],
      extrapolate: "clamp",
      easing: Easing.linear
   });
   return increaseMarginTop;
};
