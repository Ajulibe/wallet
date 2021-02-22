import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './css/PinCodeCss';

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
      textChild = (
        (pinVisible) ?
          <Text style={{ fontSize: 24, fontWeight: '700', textAlignVertical: 'center'}}>{symbol}</Text> :
          <Text style={{ fontSize: 18 }}>●</Text>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
        <Text
          key={index}
          style={[styles.cell, cellCount>4&&styles.cell6Cell, isFocused && styles.focusCell, errorText?.length != 0 && styles.errorCell,]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
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
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
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