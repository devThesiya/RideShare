import React, {useRef} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

interface OTPInputProps {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: string, index: number): void;
  onBackSpace(value: number): void;
}

const OTPInput = ({
  length,
  disabled,
  value,
  onChange,
  onBackSpace,
}: OTPInputProps) => {
  // const { styles } = useStyles(stylesheet)
  const inputRefs = useRef<Array<Nullable<TextInput>>>([]);

  const onChangeValue = (text: string, index: number) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }

      return item;
    });
    onChange(newValue[index], index);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;

    if (nativeEvent.key === 'Backspace') {
      onBackSpace(index);
      handleChange('', index);
    }
  };

  return (
    <View style={styles.container}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={ref => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          style={styles.input}
          // keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    width: 50,
    height: 48,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: '#D0D0D0',
    borderRadius: 8,
  },
});

export default OTPInput;
