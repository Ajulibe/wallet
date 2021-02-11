import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const AuthCreatePin = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      
    </View>
  );
};

AuthCreatePin.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AuthCreatePin;

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
