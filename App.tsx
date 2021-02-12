import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigation from "./src/navigation/MainNavigator";

export default function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
      "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
      "Roboto-BlackItalic": require("./src/assets/fonts/Roboto-BlackItalic.ttf"),
      "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      "Roboto-BoldItalic": require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
      "Roboto-Italic": require("./src/assets/fonts/Roboto-Italic.ttf"),
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
      "Roboto-LightItalic": require("./src/assets/fonts/Roboto-LightItalic.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto-MediumItalic": require("./src/assets/fonts/Roboto-MediumItalic.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
      "Roboto-ThinItalic": require("./src/assets/fonts/Roboto-ThinItalic.ttf"),
    });
  };

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
