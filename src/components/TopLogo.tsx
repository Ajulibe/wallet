import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';


export default function TopLogo({ imgSrc, }: { imgSrc: ImageSourcePropType}) {
    
  return (
    <Image
    source={imgSrc}
    style={styles.logo}/>
  );
}


const styles = StyleSheet.create({
    logo: {
      resizeMode: "contain",
      height: hp("6%"),
      width: wp("24%"),
      marginTop: 20,
      // marginLeft: -6
    },
})