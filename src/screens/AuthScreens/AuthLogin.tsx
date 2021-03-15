import React, { useCallback, useState, useEffect } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   StatusBar,
   Image,
   StyleSheet,
   Platform
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import OtpCodeInput from "../../components/OtpCodeInput";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import IMAGES from "../../utils/Images";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from "../../utils/Utilities";
import CryptoJS from "crypto-js";
import COLORS from "../../utils/Colors";
import aesjs from "aes-js";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import bcrypt from "bcrypt";
import { AuthDetail } from "../../models/AuthDetail";
import { CountryData } from "../../extra/CountryData";

//redux wahala
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";
import { loginUser } from "../../store/actions/AuthActions";
import { UserInterface } from "../../store/types/AuthTypes";
import { TextInput } from "react-native-gesture-handler";
import { CountryPicker } from "../../components/CountryPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "../../utils/StorageKeys";
import InputPin from "../../components/InputPin";
import libphonenumber from "google-libphonenumber";
import InputPhoneNumber from "../../components/InputPhoneNumber";
import Input from "../../components/Input";

type Props = StackScreenProps<
   AuthStackParamList,
   ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN
>;

const CELL_COUNT = 4;
const AuthLogin = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);

   const [loggedUser, setLoggedUser] = useState({} as UserInterface); //initial phone no. stored in the async storage
   const [phoneNumber, setPhoneNumber] = useState("");
   const [otpCode, setPinCode] = useState("");

   const [phoneErrorText, setPhoneErrorText] = useState("");
   const [pinErrorText, setPinErrorText] = useState("");
   // country data
   const [openCountry, setOpenCountry] = useState(false); //couhntry show/hide listener
   const [country, setCountry] = useState(CountryData.africaCountries[0]);

   //REDUCER DISPATCH
   const dispatch = useDispatch();
   const { user, error, loading, success } = useSelector(
      (state: RootState) => state.user
   );
   //check async storage for phone no & user details
   useEffect(() => {
      AsyncStorage.getItem(STORAGE_KEYS.USER).then((u) =>
         setLoggedUser(JSON.parse(u!))
      );
      AsyncStorage.getItem(STORAGE_KEYS.PHONE_NUMBER).then((no) => {
         if (phoneNumber == "") setPhoneNumber(no!);
      });
   }, []);
   // Btn bg color based on the input
   useEffect(() => {
      if (phoneNumber == null) return;

      if (phoneNumber.length < 10) {
         setBtnBgColor(COLORS.light.disabled);
      } else if (otpCode.length != CELL_COUNT) {
         setPhoneErrorText("");
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setPinErrorText("");
         setBtnBgColor(COLORS.light.primary);
      }
   }, [phoneNumber, otpCode]);

   // on submit click handler
   let onSubmit = () => {
      let phone = country.dial_code + parseInt(phoneNumber);
      // google libphonenumber init
      const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
      const number = phoneNumberUtil.parseAndKeepRawInput(phone, country.code);
      if (!phoneNumberUtil.isValidNumber(number)) {
         setPhoneErrorText("Enter a valid phone number");
      } else if (otpCode == "") {
         setPhoneErrorText("");
         setPinErrorText("Enter your pin");
      } else if (otpCode.length != CELL_COUNT) {
         setPinErrorText(`Enter ${CELL_COUNT} digit pin to proceed`);
      } else {
         setPhoneErrorText("");
         setPinErrorText("");
         login(phone);
      }
   };

   //otp submit handler
   const login = (phone: string) => {
      let nigPhone = CountryData.nigPhoneFormat(phone!);
      //dispatching login to the user
      dispatch(loginUser({ PhoneNumber: nigPhone, pin: otpCode }));
   };

   // listening to redux events
   useEffect(() => {
      if (success) {
         if (user.phoneNumber != "") {
            AsyncStorage.setItem(STORAGE_KEYS.PHONE_NUMBER, user.phoneNumber);
            AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
            // navigate the next screen
            navigation.navigate(ROUTES.NEW_HOME_TAB);
         }
      }
   }, [success]);

   const encrypt_decrypt1 = () => {
      // An example 128-bit key
      var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

      // The initialization vector (must be 16 bytes)
      var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

      // Convert text to bytes (text must be a multiple of 16 bytes)
      var text = "TextMustBe16Byte";
      var textBytes = aesjs.utils.utf8.toBytes(text);

      var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
      var encryptedBytes = aesCbc.encrypt(textBytes);

      // To print or store the binary data, you may convert it to hex
      var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
      console.log(encryptedHex);
      // "104fb073f9a131f2cab49184bb864ca2"

      // When ready to decrypt the hex string, convert it back to bytes
      var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

      // The cipher-block chaining mode of operation maintains internal
      // state, so to decrypt a new instance must be instantiated.
      var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
      var decryptedBytes = aesCbc.decrypt(encryptedBytes);

      // Convert our bytes back into text
      var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
      console.log(decryptedText);
      // "TextMustBe16Byte"
   };

   const encrypt_decrypt2 = () => {
      var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
      //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

      var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
      //4d657373616765
   };
   return (
      <View style={styles.wrapper}>
         <CountryPicker
            initialSnap={openCountry ? 0 : 1}
            onClose={() => setOpenCountry(false)}
            current={country}
            onCountryChange={(newCountry) => setCountry(newCountry)}
         />
         <StatusBar backgroundColor={COLORS.light.white} />

         <View style={styles2.container}>
            <View style={styles2.body}>
               <View style={{ alignItems: "center" }}>
                  <Image
                     source={IMAGES["logo"]}
                     style={{
                        height: wp("21.33%"),
                        width: wp("21.33%"),
                        marginBottom: hp("4.31%")
                     }}
                  />
               </View>

               <Text
                  style={[styles.formTitle, { textAlign: "center" }]}
               >{`Welcome back`}</Text>

               <Text style={[styles.formSubtitle, { textAlign: "center" }]}>
                  Login with your details that you entered during your
                  registration
                  {/* {JSON.stringify(user)}=={JSON.stringify(loading)}=={JSON.stringify(error)} */}
               </Text>

               <Text style={[styles.inputLabel, { textAlign: "left" }]}>
                  Phone Number
               </Text>
               <InputPhoneNumber
                  country={country}
                  onTextInputChange={(v) => setPhoneNumber(v)}
                  openCountryModal={(isS) => setOpenCountry(isS)}
                  errorText={phoneErrorText}
                  initialValue={phoneNumber}
                  onSubmit={onSubmit}
               />
               {/* custom otp plugin   */}
               <Text style={[styles.inputLabel, { textAlign: "left" }]}>
                  Enter your Pin
               </Text>
               {/* <InputPin
                    cellCount={CELL_COUNT}
                    onTextInputChange={(pin) => setPinCode(pin!.toString())}
                    errorText={pinErrorText}
                /> */}
               <Input
                  id="Pin"
                  placeholder="eg. 1234"
                  placeholderTextColor=""
                  errorText={pinErrorText}
                  touched={true}
                  keyboardType="number-pad"
                  autoCapitalize="sentences"
                  returnKeyType="send"
                  onInputChange={(pin?: string) => setPinCode(pin!.toString())}
                  onSubmit={onSubmit}
                  initialValue=""
                  initiallyValid={false}
                  required
                  secureTextEntry={false}
                  minLength={2}
                  maxLength={4}
                  textContentType="none"
               />
               <Text
                  style={{
                     color: COLORS.light.red,
                     display: error ? "flex" : "none"
                  }}
               >
                  {error}
               </Text>
            </View>
            {/* <View style={{ flex: 1 }} /> */}

            <View style={styles2.footer}>
               {/* continue btn  */}
               <CustomButton
                  bgColor={loading ? COLORS.light.disabled : btnBgColor}
                  textColor={COLORS.light.white}
                  btnText={"Login"}
                  isLoading={loading!}
                  onClick={() => onSubmit()}
               />
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     marginTop: 20,
                     justifyContent: "center"
                  }}
               >
                  <Text
                     style={{
                        fontFamily: "Inter-Regular",
                        color: COLORS.light.black2
                     }}
                  >
                     Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity
                     onPress={() =>
                        navigation.navigate(ROUTES.AUTH_PHONE_NO_SCREEN)
                     }
                  >
                     <Text style={styles2.loginText}>Sign Up</Text>
                  </TouchableOpacity>
               </View>
               <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.AUTH_LOGIN)}
               >
                  <Text
                     style={{
                        fontFamily: "Inter-Regular",
                        color: COLORS.light.black2,
                        textAlign: "center",
                        marginTop: 8
                     }}
                  >
                     I forgot my password
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

export default AuthLogin;

const styles2 = StyleSheet.create({
   container: {
      flex: 1,
      height: hp("100%"),
      width: "100%",
      // paddingVertical: hp("8%"),
      paddingTop: Platform.OS ? hp("11.57%") : hp("10%")
   },
   body: {
      paddingHorizontal: wp("9.6%"),
      marginBottom: 8
   },
   footer: {
      borderTopColor: "#EBEBF2",
      borderTopWidth: 1,
      // paddingVertical: hp("3.4%"),
      marginTop: hp("4.43%"),
      paddingHorizontal: wp("9.6%")
   },
   loginText: {
      fontFamily: "Inter-Medium",
      color: COLORS.light.secondary
   }
});
