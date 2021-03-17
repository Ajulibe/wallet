import React, { useState } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../../../../../components/Input";

const SecurityQuestionInputs: React.FC = ({}) => {
  const [personalQuestion, setPersonalQuestion] = useState<string | null>("");
  const [answer, setAnswer] = useState<string | null>("");
  const [otp, ssetOtp] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const inputChangeHandler = (value: any) => {};

  return (
    <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
      <Input
        id="personalQuestion"
        placeholder="Set a personal question"
        placeholderTextColor="rgb(134,146,185,1)"
        errorText="Cannot be empty"
        keyboardType="default"
        autoCapitalize="sentences"
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        onSubmit={inputChangeHandler}
        initialValue=""
        initiallyValid={false}
        required
        secureTextEntry={false}
        minLength={2}
        textContentType="none"
        value={personalQuestion}
      />
      <View style={{ height: hp("3.36%") }} />
      <Input
        id="yourAnswer"
        placeholder="Your answer"
        placeholderTextColor="rgb(134,146,185,1)"
        errorText="Enter your last name"
        keyboardType="default"
        autoCapitalize="sentences"
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        onSubmit={inputChangeHandler}
        initialValue=""
        initiallyValid={false}
        required
        secureTextEntry={false}
        minLength={2}
        textContentType="none"
        value={answer}
      />
      <View style={{ height: hp("3.36%") }} />
      <Input
        id="otp"
        placeholder="Enter a generated OTP"
        placeholderTextColor="rgb(134,146,185,1)"
        errorText="Cannot be empty"
        keyboardType="default"
        autoCapitalize="sentences"
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        onSubmit={inputChangeHandler}
        initialValue=""
        initiallyValid={false}
        required
        secureTextEntry={false}
        minLength={2}
        textContentType="none"
        value={otp}
      />
      <View style={{ height: hp("3.36%") }} />
      <Input
        id="yourAnswer"
        placeholder="Password"
        placeholderTextColor="rgb(134,146,185,1)"
        errorText="Enter your last name"
        keyboardType="default"
        autoCapitalize="sentences"
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        onSubmit={inputChangeHandler}
        initialValue=""
        initiallyValid={false}
        required
        secureTextEntry={true}
        minLength={2}
        textContentType="none"
        value={password}
      />
    </View>
  );
};

export default SecurityQuestionInputs;
