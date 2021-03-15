import React, { useCallback, useState, useEffect } from "react";
import {
   View,
   ScrollView,
   Text,
   Image,
   TouchableOpacity,
   StatusBar
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import TopLogo from "../../components/TopLogo";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import CircularProgress from "../../components/CircularProgress";
import IMAGES from "../../utils/Images";
import ProgressLoader from "../../components/ProgressLoader";
import styles from "../../components/css/AuthFormCss";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP
} from "react-native-responsive-screen";
import { AuthDetail } from "../../models/AuthDetail";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;
export default function AuthEmail({ navigation, route }: Props) {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [fNameErrorText, setFNameErrorText] = useState("");
   const [lNameErrorText, setLNameErrorText] = useState("");
   const [touchedAction, setTouchedAction] = useState(false);
   const [authDetail, setAuthDetail] = useState(route.params.authDetail);

   // set the navigation prop authDetail
   useEffect(() => {
      setAuthDetail(route.params.authDetail); //route.key, route.name, route.params,
   }, []);

   let fNameInputChangeHandler = (value?: string) => {
      setFirstName(value!);
   };

   let lNameInputChangeHandler = (value?: string) => {
      setLastName(value!);
   };

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
      setTouchedAction(true);
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
      <View style={styles.wrapper}>
         <StatusBar
            backgroundColor={COLORS.light.white}
            hidden
            barStyle="light-content"
            translucent={true}
         />
         <View style={styles.container}>
            <View style={styles.progressWrapper}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons
                     name={"arrow-back-ios"}
                     size={24}
                     color={COLORS.light.black2}
                  />
               </TouchableOpacity>
               <CircularProgress icon={"id-card"} progress={36} iconSize={18} />
            </View>
            <Text style={styles.formTitle}>{`Personal Info`}</Text>

            <Text style={styles.formSubtitle}>
               We would use this as the name for your Surepay account
            </Text>
            <Text style={styles.inputLabel}>First name</Text>
            <Input
               id="firstName"
               placeholder="First name"
               placeholderTextColor=""
               errorText={fNameErrorText}
               keyboardType="default"
               autoCapitalize="sentences"
               returnKeyType="next"
               onInputChange={fNameInputChangeHandler}
               onSubmit={onSubmit}
               initialValue=""
               touched={touchedAction}
               initiallyValid={false}
               required
               secureTextEntry={false}
               minLength={2}
               textContentType="none"
            />
            <View style={{ height: hp("1%") }} />
            <Text style={styles.inputLabel}>Last name</Text>
            <Input
               id="lastName"
               placeholder="Last name"
               placeholderTextColor=""
               errorText={lNameErrorText}
               keyboardType="default"
               autoCapitalize="sentences"
               returnKeyType="next"
               onInputChange={lNameInputChangeHandler}
               onSubmit={onSubmit}
               initialValue=""
               touched={touchedAction}
               initiallyValid={false}
               required
               secureTextEntry={false}
               minLength={2}
               textContentType="none"
            />

            <CustomButton
               bgColor={btnBgColor}
               textColor={COLORS.light.white}
               btnText={"Continue"}
               onClick={onSubmit}
            />
         </View>
      </View>
   );
}
