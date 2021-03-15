import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { SvgUri } from "react-native-svg";
import { CountryInterface } from "../extra/CountryData";
import COLORS from "../utils/Colors";

interface Props {
  initialValue?: string;
  country: CountryInterface;
  errorText?: string;
  openCountryModal: (isShown: boolean) => void;
  onTextInputChange: (newVal: string) => any;
  onSubmit: () => any;
}

const InputPhoneNumber = (props: Props) => {
  const [borderColor, setBorderColor] = useState(COLORS.light.inputBorder)

  const { errorText, country } = props;
  return (
    <View>
      <View
        style={[
          inputStyles.formControl,
          {
            backgroundColor:
              errorText != ""
                ? COLORS.light.inputBgError
                : COLORS.light.inputBg,
            borderColor:
              errorText != ""
                ? COLORS.light.red
                : borderColor
          }
        ]}
      >
        <TouchableOpacity onPress={() => props.openCountryModal(true)}>
          <View style={inputStyles.countryCodeWrapper}>
            <ImageBackground
              source={{ uri: `https://flagcdn.com/w20/${country.code.toLocaleLowerCase()}.png` }}
              imageStyle={{ borderRadius: 60 }}
              style={inputStyles.countryFlag} />
            <Text
              style={{
                fontSize: wp("3.73%"),
                fontFamily: "Inter-Regular",
                color: COLORS.light.black2
              }}
            >
              {country.dial_code}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={inputStyles.verticalLine}
        />
        <TextInput
          placeholder="803 000 0000"
          keyboardType="number-pad"
          autoCapitalize="sentences"
          autoCorrect={false}
          onChangeText={(newVal) => props.onTextInputChange(newVal)}
          returnKeyType="next"
          onSubmitEditing={() => props.onSubmit()}
          defaultValue={props.initialValue}
          maxLength={11}
          textContentType="telephoneNumber"
          placeholderTextColor={COLORS.light.inputPlaceholder}
          onBlur={() => setBorderColor(COLORS.light.inputBorder)}
          onFocus={() => setBorderColor(COLORS.light.black2)}
          style={[
            inputStyles.input,
            {
              color:
                errorText != ""
                  ? COLORS.light.inputTextError
                  : COLORS.light.inputText
            }
          ]}
        />
      </View>

      {errorText != "" && (
        <View style={inputStyles.errorContainer}>
          <Text style={inputStyles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default InputPhoneNumber;

const inputStyles = StyleSheet.create({
  formControl: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: COLORS.light.inputBg,
    borderColor: COLORS.light.inputBorder,
  },
  countryCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: wp("2%"),
    paddingLeft: wp('4%'),
    paddingVertical: hp("1.47%")
  },
  countryFlag: {
    width: wp('5.33%'),
    height: wp('5.33%'),
    marginRight: wp('1.6%')
  },
  verticalLine: {
    height: hp("2.8%"),
    width: 1,
    backgroundColor: COLORS.light.black2
  },
  input: {
    flex: 1,
    fontSize: wp("3.73%"),
    fontFamily: "Inter-Regular",
    paddingHorizontal: wp("1.6%"),
    paddingVertical: hp("1.47%"),
    color: COLORS.light.black
  },
  errorContainer: {
    marginVertical: 0
  },
  errorText: {
    marginTop: hp("1%"),
    fontFamily: "Inter-Regular",
    color: COLORS.light.red,
    fontSize: wp("3.5%")
  }
});
