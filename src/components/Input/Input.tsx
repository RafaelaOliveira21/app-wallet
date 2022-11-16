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
import { Text, TextInputProps } from 'react-native';

interface InputRef extends TextInputProps {
  focus(): void;
}

interface InputValueReference extends TextInputProps {
  value: string;
}

const Input: React.FC = () => {
  return (
    <Container>
      <Text>Input</Text>
    </Container>
  );
};

export { Input };
