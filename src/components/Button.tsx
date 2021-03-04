import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  GestureResponderEvent,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import IMAGES from "../utils/Images";

type Props = {
  bgColor: string;
  textColor: string;
  btnText: string;
  onClick: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
};

export default function Button({
  bgColor,
  textColor,
  btnText,
  onClick,
  isLoading = false,
}: Props) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={[styles.btn, { backgroundColor: bgColor }]}
        pointerEvents={!isLoading ? "none" : "auto"}
      >
        <Image
          source={IMAGES.loading}
          style={[styles.image, { display: isLoading ? "flex" : "none" }]}
        />
        <Text style={[styles.title, { color: textColor }]}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 4,
    paddingVertical: 18,
    marginTop: hp("3.69%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "Lato-Regular",
    fontSize: wp("4.25%"),
  },
  image: {
    width: wp("6%"),
    height: wp("6%"),
    marginRight: 6,
  },
});
