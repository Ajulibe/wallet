import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import pinStyles from '../../components/css/PinCodeCss';
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import CircularProgress from "../../components/CircularProgress";
import styles from "../../components/css/AuthFormCss";

const CELL_COUNT = 6;

const MaskExample = () => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({ index, symbol, isFocused }: { index: number, symbol: string, isFocused: boolean }) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <Text style={{ fontSize: 12 }}>●</Text>
        // {symbol}
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[pinStyles.cell, isFocused && pinStyles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  useEffect(() => {
    if (value.length == CELL_COUNT) {
      setBtnBgColor(COLORS.light.primary)
    } else {
      setBtnBgColor(COLORS.light.primaryDisabled)
    }
    return () => {
      // cleanup
    }
  }, [value])

  const onSubmit = () => {
    console.log(value)
  }

  return (

    <View style={styles.container}>
      <CircularProgress icon="envelope" progress={80} />

      <Text style={styles.formTitle}>{`This is not compulsory. If you don’t have an email address, you skip this option.`}</Text>

      <Text style={styles.inputLabel}>Email Address</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={pinStyles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

      <View style={{ flex: 1 }} />

      <CustomButton
        bgColor={btnBgColor}
        textColor={COLORS.light.white}
        btnText={"Next"}
        onClick={onSubmit}
      />

      {/* <ProgressLoader isLoading={true} imgSrc={IMAGES.loading} /> */}
    </View>
  );
};

export default MaskExample;