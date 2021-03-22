import React, { useEffect, useState } from "react";
import {
   View,
   ScrollView,
   SafeAreaView,
   StatusBar,
   Text,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import CustomButton from "../../../../../../components/Button";
import COLORS from "../../../../../../utils/Colors";
import globalStyles from "../../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../../../../navigation/Routes";
import { ProfileStackParamList } from "../../../../../../navigation/ProfileStack";
import InputPin from "../../../../../../components/InputPin";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;
const CELL_COUNT = 4;

const ChangePinScreen = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [oldPin, setOldPin] = useState("");
   const [newPin, setNewPin] = useState("");
   const [newPinConfirm, setNewPinConfirm] = useState("");

   const [oldPinError, setOldPinError] = useState("");
   const [newPinError, setNewPinError] = useState("");
   const [newPinConfirmError, setNewPinConfirmError] = useState("");
   // checking the inputs on text change
   useEffect(() => {
      let isInputsValid =
         oldPin.length === CELL_COUNT &&
         newPin.length === CELL_COUNT &&
         newPinConfirm.length === CELL_COUNT;
      if (isInputsValid) {
         setBtnBgColor(COLORS.light.primary);
      } else {
         setBtnBgColor(COLORS.light.disabled);
      }
   }, [oldPin, newPin, newPinConfirm]);

   const onSubmit = () => {};
   return (
      <>
         <SafeAreaView style={{ flex: 1 }}>
            {/* <StatusBar barStyle="light-content" /> */}
            <CustomAppbar navigation={navigation} title="Change Pin" />
            <KeyboardAvoidingView
               behavior={"padding"}
               style={{ flex: 1 }}
               keyboardVerticalOffset={Platform.OS == "android" ? 0 : -50}
            >
               <ScrollView
                  contentContainerStyle={{
                     flexGrow: 1
                  }}
                  keyboardShouldPersistTaps="handled"
                  bounces={false}
                  showsVerticalScrollIndicator={false}
               >
                  <View style={globalStyles.container}>
                     <Text style={globalStyles.inputLabel}>Old Pin</Text>
                     <InputPin
                        cellCount={CELL_COUNT}
                        onTextInputChange={(val) => setOldPin(val)}
                        errorText={oldPinError}
                     />
                     <View style={globalStyles.inputGap} />
                     <Text style={globalStyles.inputLabel}>New Pin</Text>
                     <InputPin
                        cellCount={CELL_COUNT}
                        onTextInputChange={(val) => setNewPin(val)}
                        errorText={newPinError}
                     />
                     <View style={globalStyles.inputGap} />
                     <Text style={globalStyles.inputLabel}>
                        Confirm New Pin
                     </Text>
                     <InputPin
                        cellCount={CELL_COUNT}
                        onTextInputChange={(val) => setNewPinConfirm(val)}
                        errorText={newPinConfirmError}
                     />
                     <View style={{ flex: 1 }} />

                     <CustomButton
                        bgColor={btnBgColor}
                        textColor={COLORS.light.white}
                        btnText={"Change"}
                        onClick={onSubmit}
                     />
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

export default ChangePinScreen;
