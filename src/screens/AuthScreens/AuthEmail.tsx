import React, { useCallback, useRef, useState } from "react";
import {
   View,
   ScrollView,
   Text,
   Image,
   TouchableOpacity,
   StatusBar,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import IMAGES from "../../utils/Images";
import InputValidation from "../../utils/InputValidation";
import CircularProgress from "../../components/CircularProgress";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;
const AuthEmail = ({ navigation, route }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [email, setEmail] = useState("");
   const [errorText, setErrorText] = useState("");
   const [touchedAction, setTouchedAction] = useState(false);
   const [authDetail, setAuthDetail] = useState(route.params.authDetail);

   let inputChangeHandler = (value?: string) => {
      setEmail(value!);

      if (InputValidation.isValidEmail(value!)) {
         setBtnBgColor(COLORS.light.primary);
         setErrorText("");
      } else {
         setBtnBgColor(COLORS.light.disabled);
      }
   };

   const onSubmit = () => {
      setTouchedAction(true);

      if (email == "") {
         setErrorText("Enter your email");
      } else if (!InputValidation.isValidEmail(email)) {
         setErrorText("Enter a valid email address");
      } else {
         authDetail.emailAddress = email.toLocaleLowerCase();
         navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN, {
            authDetail: authDetail
         });
      }
   };

   return (
      <KeyboardAvoidingView
         behavior={"padding"}
         style={{ flex: 1 }}
         keyboardVerticalOffset={Platform.OS == "android" ? -300 : -50}
      >
         <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
         >
            <View style={styles.wrapper}>
               {/* <StatusBar backgroundColor={COLORS.light.white} /> */}
               {/* top menu  */}
               <View style={styles.container}>
                  <View style={styles.progressWrapper}>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons
                           name={"arrow-back-ios"}
                           size={24}
                           color={COLORS.light.textBlack}
                        />
                     </TouchableOpacity>
                     <CircularProgress
                        iconPath={IMAGES["icon-auth-email"]}
                        progress={48}
                     />
                  </View>
                  <Text style={styles.formTitle}>{"Email Address"}</Text>

                  <Text style={styles.formSubtitle}>
                     Almost done! Please enter a valid email address that we can
                     use to reach you
                  </Text>
                  <Text style={styles.inputLabel}>Email Address</Text>
                  <Input
                     placeholder="Email address"
                     placeholderTextColor=""
                     errorText={errorText}
                     keyboardType="email-address"
                     autoCapitalize="sentences"
                     returnKeyType="next"
                     onSubmit={onSubmit}
                     onInputChange={inputChangeHandler}
                     initialValue=""
                     initiallyValid={false}
                     required
                     secureTextEntry={false}
                     minLength={2}
                     textContentType="none"
                  />

                  {/* Skip button */}
                  <TouchableOpacity
                     onPress={() =>
                        navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN, {
                           authDetail: authDetail
                        })
                     }
                  >
                     <Text style={styles.secondaryButton}>
                        I don’t have an e-mail address
                     </Text>
                  </TouchableOpacity>
                  <View style={{ flex: 1 }} />
                  <CustomButton
                     bgColor={btnBgColor}
                     textColor={COLORS.light.white}
                     btnText={"Continue"}
                     onClick={onSubmit}
                  />
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default AuthEmail;
