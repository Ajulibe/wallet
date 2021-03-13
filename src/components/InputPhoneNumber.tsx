import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
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
                : COLORS.light.inputBorder
          }
        ]}
      >
        <TouchableOpacity onPress={() => props.openCountryModal(true)}>
          <View style={inputStyles.countryCodeWrapper}>
            <Text
              style={{
                fontSize: wp("5%"),
                fontFamily: "Inter-Regular",
                color: COLORS.light.inputText
              }}
            >
              {country.dial_code}
            </Text>
            <MaterialIcons
              name={"keyboard-arrow-down"}
              size={24}
              color={COLORS.light.inputText}
            />
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder="803 000 0000"
            keyboardType="number-pad"
            autoCapitalize="sentences"
            autoCorrect={false}
            onChangeText={(newVal) => props.onTextInputChange(newVal)}
            onSubmitEditing={() => props.onSubmit()}
            defaultValue={props.initialValue}
            maxLength={11}
            textContentType="telephoneNumber"
            placeholderTextColor={COLORS.light.inputPlaceholder}
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
    borderWidth: 0.2,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: COLORS.light.inputBg,
    borderColor: COLORS.light.inputBorder
  },
  countryCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "rgba(0,63,136,0.1)",
    borderRightWidth: 1,
    paddingHorizontal: wp("2.2%"),
    paddingVertical: hp("2%")
  },
  input: {
    flex: 1,
    fontSize: wp("5%"),
    fontFamily: "Inter-Regular",
    paddingHorizontal: wp("5.6%"),
    paddingVertical: hp("2%"),
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
