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
         "Inter-Black": require("./src/assets/fonts/Inter-Black.ttf"),
         "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
         "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
         "Inter-Light": require("./src/assets/fonts/Inter-Light.ttf"),
         "Inter-Medium": require("./src/assets/fonts/Inter-Medium.ttf"),
         "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
         "Inter-Thin": require("./src/assets/fonts/Inter-Thin.ttf")
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
