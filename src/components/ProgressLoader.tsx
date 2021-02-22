import React, { Component } from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';


export default function Loader({imgSrc, isLoading}: {imgSrc: ImageSourcePropType, isLoading: boolean}) {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.05)' }}>

            {/* <ActivityIndicator animating={isLoading} color='#000' /> */}

            {/* If you want to image set source here */}
            <Image
              source={imgSrc}
              style={{ height: 40, width: 40 }}
              resizeMode="contain"
              resizeMethod="resize"
            />
      </View>
    )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'transparent',
    zIndex: 1100, 
    width:'100%', 
    height:'100%'
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000, 
    width:'100%', 
    height:'100%',
    // height:'600px',
  },
});
