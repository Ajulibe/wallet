import React, { useCallback, useState, useEffect } from "react";
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
import CircularProgress from "../../components/CircularProgress";
import IMAGES from "../../utils/Images";
import styles from "../../components/css/AuthFormCss";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;
export default function AuthEmail({ navigation, route }: Props) {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [fNameErrorText, setFNameErrorText] = useState("");
   const [lNameErrorText, setLNameErrorText] = useState("");
   const [authDetail, setAuthDetail] = useState(route.params.authDetail);

   // set the navigation prop authDetail
   useEffect(() => {
      setAuthDetail(route.params.authDetail); //route.key, route.name, route.params,
   }, []);

   // checking the inputs on text change
   useEffect(() => {
      if (firstName == "") {
         setBtnBgColor(COLORS.light.disabled);
      } else if (lastName == "") {
         setFNameErrorText("");
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setLNameErrorText("");
         setBtnBgColor(COLORS.light.primary);
      }
   }, [firstName, lastName]);

   const onSubmit = () => {
      setFNameErrorText("");
      setLNameErrorText("");

      if (firstName == "") {
         setFNameErrorText("Enter your first name");
      } else if (lastName == "") {
         setLNameErrorText("Enter your last name");
      } else {
         authDetail.firstName = firstName;
         authDetail.lastName = lastName;
         navigation.navigate(ROUTES.AUTH_EMAIL_SCREEN, {
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
                        iconPath={IMAGES["icon-auth-fullname"]}
                        progress={36}
                     />
                  </View>
                  <Text style={styles.formTitle}>{`Personal Info`}</Text>

                  <Text style={styles.formSubtitle}>
                     We would use this as the name for your Surepay account
                  </Text>
                  <Text style={styles.inputLabel}>First name</Text>
                  <Input
                     placeholder="First name"
                     placeholderTextColor=""
                     errorText={fNameErrorText}
                     keyboardType="default"
                     autoCapitalize="sentences"
                     returnKeyType="next"
                     onInputChange={(value) => setFirstName(value)}
                     onSubmit={onSubmit}
                     initialValue=""
                     initiallyValid={false}
                     required
                     secureTextEntry={false}
                     minLength={2}
                     textContentType="none"
                  />
                  <View style={{ height: hp("1%") }} />
                  <Text style={styles.inputLabel}>Last name</Text>
                  <Input
                     placeholder="Last name"
                     placeholderTextColor=""
                     errorText={lNameErrorText}
                     keyboardType="default"
                     autoCapitalize="sentences"
                     returnKeyType="next"
                     onInputChange={(value) => setLastName(value)}
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
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
}
