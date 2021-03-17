import IconButton from ".";
import { storiesOf } from "@storybook/react-native";
import React from "react";

storiesOf("IconButton", module)
   .add("on", () => (
      <IconButton
         icon={"heart"}
         color={"#333"}
         onPress={() => console.log("un-favorited!")}
      />
   ))
   .add("off", () => (
      <IconButton
         icon={"heart-o"}
         color={"#333"}
         onPress={() => console.log("favorited!")}
      />
   ));
