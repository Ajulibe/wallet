import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import IMAGES from "../../utils/Images";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;

const AuthEmail = ({ navigation }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
  const [fullName, setFullName] = useState("");

  let inputChangeHandler = useCallback((id, value, isValid) => {
    setFullName(value.toString());

  }, []);

  const onSubmit = () => {
    navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
      <View style={styles.wrapper}>

        <StatusBar backgroundColor={COLORS.light.white} />
        {/* overlay bg image */}
        <View style={styles.overlayWrapper}>
          <Image source={IMAGES["top-overlay-white"]} style={styles.overlayImage} />
        </View>
        {/* top menu  */}
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={24}
                color={COLORS.light.secondary}
              />
            </TouchableOpacity>
            {/* Skip button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontFamily: 'Lato-Regular', textDecorationLine: 'underline' }}>Skip</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Email address</Text>

          <Text style={styles.formSubtitle}>Please give us your mail address ino, we finna use it to contact you</Text>
          <Input
            id="fullName"
            placeholder="Email address"
            placeholderTextColor=""
            errorText="Enter valid email address"
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="none"
            onSubmit={inputChangeHandler}
            onInputChange={inputChangeHandler}
            initialValue=""
            initiallyValid={false}
            required
            secureTextEntry={false}
            minLength={11}
            textContentType="none"
          />

          <View style={{ flex: 1 }} />

          <CustomButton
            bgColor={btnBgColor}
            textColor={COLORS.light.white}
            btnText={"Next"}
            onClick={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthEmail;