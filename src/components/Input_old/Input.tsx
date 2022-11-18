import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect
} from 'react';
import { Container, IConContainer, InputText } from './styles';
import { useField } from '@unform/core';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Text, TextInputProps } from 'react-native';

interface InputRef {
  focus(): void;
}

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
  containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { iconName, name, value, containerStyle, ...rest },
  ref
) => {
  const theme = useTheme();

  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    setHasError(!!error);
  }, [error]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setHasError(false);
  }, [error]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle}>
      <IConContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      >
        <Ionicons
          name={iconName}
          size={25}
          color={
            isFocused || hasError || isFilled
              ? theme.COLORS.BLUE1
              : theme.COLORS.GRAY1
          }
        />
      </IConContainer>

      <InputText
        ref={inputElementRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFilled={isFilled}
        isFocused={isFocused}
        hasError={hasError}
        defaultValue={defaultValue}
        placeholderTextColor={theme.COLORS.GRAY1}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export { Input };
