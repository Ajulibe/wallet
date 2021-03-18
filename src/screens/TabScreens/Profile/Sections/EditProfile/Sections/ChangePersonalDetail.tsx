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
import Input from "../../../../../../components/Input";
import InputValidation from "../../../../../../utils/InputValidation";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const ChangePersonalDetailScreen = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastName] = useState("");
   const [emailAddress, setEmailAddress] = useState("");

   const [fNameErrorText, setFNameErrorText] = useState("");
   const [lNameErrorText, setLNameErrorText] = useState("");
   const [emailErrorText, setEmailErrorText] = useState("");
   // checking the inputs on text change
   useEffect(() => {
      let isInputsValid =
         firstname != "" &&
         lastname != "" &&
         InputValidation.isValidEmail(emailAddress);
      if (isInputsValid) {
         setBtnBgColor(COLORS.light.primary);
      } else {
         setBtnBgColor(COLORS.light.disabled);
      }
   }, [firstname, lastname, emailAddress]);

   // {/*
   //    // @ts-ignore */}
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
                     <Text style={globalStyles.inputLabel}>First name</Text>
                     <Input
                        placeholder="First name"
                        placeholderTextColor="rgb(134,146,185,1)"
                        errorText={fNameErrorText}
                        keyboardType="default"
                        autoCapitalize="sentences"
                        returnKeyType="done"
                        onInputChange={(value) => setFirstname(value)}
                        onSubmit={onSubmit}
                        initialValue=""
                        initiallyValid={false}
                        required
                        secureTextEntry={false}
                        minLength={2}
                        textContentType="none"
                     />
                     <View style={globalStyles.inputGap} />
                     <Text style={globalStyles.inputLabel}>Last name</Text>
                     <Input
                        placeholder="Last name"
                        placeholderTextColor="rgb(134,146,185,1)"
                        errorText={lNameErrorText}
                        keyboardType="default"
                        autoCapitalize="sentences"
                        returnKeyType="done"
                        onInputChange={(value) => setLastName(value)}
                        onSubmit={onSubmit}
                        initialValue=""
                        initiallyValid={false}
                        required
                        secureTextEntry={false}
                        minLength={2}
                        textContentType="none"
                     />
                     <View style={globalStyles.inputGap} />
                     <Text style={globalStyles.inputLabel}>Email Address</Text>
                     <Input
                        placeholder="Email address"
                        placeholderTextColor="rgb(134,146,185,1)"
                        errorText={emailErrorText}
                        keyboardType="email-address"
                        autoCapitalize="sentences"
                        returnKeyType="done"
                        onInputChange={(value) => setEmailAddress(value)}
                        onSubmit={onSubmit}
                        initialValue=""
                        initiallyValid={false}
                        required
                        secureTextEntry={false}
                        minLength={2}
                        textContentType="none"
                     />
                     <View style={{ flex: 1 }} />

                     <CustomButton
                        bgColor={btnBgColor}
                        textColor={COLORS.light.white}
                        btnText={"Continue"}
                        onClick={onSubmit}
                     />
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

export default ChangePersonalDetailScreen;
