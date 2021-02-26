import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import * as Font from "expo-font";
import Navigation from "./src/navigation/MainNavigator";

export default function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
      "Lato-Black": require("./src/assets/fonts/Lato-Black.ttf"),
      "Lato-BlackItalic": require("./src/assets/fonts/Lato-BlackItalic.ttf"),
      "Lato-Bold": require("./src/assets/fonts/Lato-Bold.ttf"),
      "Lato-BoldItalic": require("./src/assets/fonts/Lato-BoldItalic.ttf"),
      "Lato-Italic": require("./src/assets/fonts/Lato-Italic.ttf"),
      "Lato-Light": require("./src/assets/fonts/Lato-Light.ttf"),
      "Lato-LightItalic": require("./src/assets/fonts/Lato-LightItalic.ttf"),
      "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf"),
      "Lato-Thin": require("./src/assets/fonts/Lato-Thin.ttf"),
      "Lato-ThinItalic": require("./src/assets/fonts/Lato-ThinItalic.ttf"),
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
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar hidden={true} backgroundColor="#582ED7" />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
