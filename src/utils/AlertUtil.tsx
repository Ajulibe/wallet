import { Alert } from "react-native";

class AlertUtil {
   static alert = (
      message: string,
      title: string = "",
      onPositiveClick?: () => void
   ) => {
      Alert.alert(title, message, [
         {
            text: "OK",
            onPress: () => onPositiveClick != null && onPositiveClick()
         }
      ]);
   };

   static confirm = (
      message: string,
      title: string = "",
      onPositiveClick: () => void
   ) => {
      Alert.alert(title, message, [
         {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
         },
         { text: "OK", onPress: () => onPositiveClick() }
      ]);
   };
}

export default AlertUtil;
