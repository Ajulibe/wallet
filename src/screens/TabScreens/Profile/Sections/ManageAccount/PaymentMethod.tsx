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
import CustomButton from "../../../../../components/Button";
import COLORS from "../../../../../utils/Colors";
import globalStyles from "../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../../../navigation/Routes";
import { ProfileStackParamList } from "../../../../../navigation/ProfileStack";
import ListTile from "../../../../../components/ListTile";
import IMAGES from "../../../../../utils/Images";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;
const CELL_COUNT = 4;

const PaymentMethodScreen = ({ navigation }: Props) => {
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
            <StatusBar barStyle="light-content" />
            <CustomAppbar navigation={navigation} title="Edit Profile" />
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
                     <Text style={globalStyles.inputLabel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe velit perferendis cum provident nostrum. Aut
                        pariatur dolorem nesciunt neque sunt, doloribus numquam
                        dolorum, et repudiandae dolores modi explicabo adipisci
                        recusandae.
                     </Text>
                     <ListTile
                        title="Add Account"
                        leading={IMAGES["icon-add"]}
                        onClick={() => null}
                     />
                     <ListTile
                        title="0934676364***67836283"
                        leading={IMAGES["icon-auth-bank"]}
                        onClick={() => null}
                        trailing={<Text></Text>}
                     />
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

export default PaymentMethodScreen;
