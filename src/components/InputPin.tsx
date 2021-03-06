import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from '../utils/Colors'

interface Props {
  cellCount: number,
  initialValue?: string,
  errorText?: string,
  pinVisible?: boolean,
  onTextInputChange: (code?: string) => any
}

const InputPin = ({ cellCount, initialValue = "", errorText, pinVisible = false, onTextInputChange }: Props) => {
  const [value, setValue] = useState(initialValue);
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({ index, symbol, isFocused }: { index: number, symbol: string, isFocused: boolean }) => {
    let textChild = null;

    if (symbol) {
      textChild = <View style={{ flex: 1, backgroundColor: COLORS.light.secondary, width: '100%', height: '100%', borderRadius: 50 }} />
    } else if (isFocused) {
      textChild = <Text><Cursor cursorSymbol={""} /></Text>;
    }

    return (
      <View style={[
        styles.cell,
        isFocused && styles.focusCell,
        errorText?.length != 0 && styles.errorCell,]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </View>
    );
  };

  useEffect(() => {
    onTextInputChange(value)
    return () => {
      // cleanup
    }
  }, [value])


  return (

    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
        rootStyle={styles.codeFieldRoot}
      // placeholder={"0"}
      // placeholderTextColor={COLORS.light.inputText}
      />
      {errorText?.length != 0 && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default InputPin;

let styles = StyleSheet.create({
  container: {
    marginBottom: hp('2%'),
    marginTop: hp('2%')
  },
  codeFieldRoot: {
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  cell: {
    width: wp('6.67%'),
    height: wp('6.67%'),
    lineHeight: 44,
    borderRadius: 50,
    borderColor: 'rgba(0,63,136,0.05)',
    display: 'flex',
    borderWidth: 1,
    backgroundColor: COLORS.light.inputBg,
    textAlign: 'center',
    marginHorizontal: wp('4%')
  },
  cellText: {
    flex: 1,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: COLORS.light.secondary,
    borderWidth: 2
  },
  errorCell: {
    borderColor: COLORS.light.red,
  },
  errorContainer: {
    marginVertical: 0,
  },
  errorText: {
    marginTop: hp("1%"),
    fontFamily: "Lato-Regular",
    color: COLORS.light.red,
    fontSize: 13,
    textAlign: 'center'
  },
});