import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

const SplashScreen: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 3000);
  });

  return (
    <View >
        
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default SplashScreen;
