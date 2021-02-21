import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity , View, Text, Touchable, GestureResponderEvent} from 'react-native';

type Props = { 
    bgColor: string, 
    textColor: string, 
    btnText: string, 
    onClick: ((event: GestureResponderEvent) => void),
    // for disabling
    isDisabled?: boolean,
    disabledColor?: string,
}


export default function Button({ bgColor, textColor, btnText, onClick, isDisabled = false, disabledColor }: Props) {
    
  return (
      <TouchableOpacity onPress ={onClick}>
        <View style={[styles.btn, {backgroundColor: !isDisabled?bgColor:disabledColor,}]}
        pointerEvents={!isDisabled ? 'none' : 'auto'}
        >
            <Text style={[styles.title, {color: textColor}]} >{btnText}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        borderRadius: 4,
        paddingVertical: 18,
    },
    title: {
        fontSize: 16, 
        textAlign: "center", 
        // fontWeight: "700"
    }
})


