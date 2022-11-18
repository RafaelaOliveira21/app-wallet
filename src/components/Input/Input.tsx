import React from 'react';
import { Container, InputContainer } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps {
  rightIcon?: boolean;
  leftIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon, iconName, iconSize, iconColor, ...rest }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      {leftIcon && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor || COLORS.GRAY1}
          style={{ padding: 5, marginLeft: 10 }}
        />
      )}
      <InputContainer
        {...rest}
        placeholderTextColor={COLORS.GRAY4}
      />
      {rightIcon && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor || COLORS.GRAY1}
          style={{ padding: 5, marginRight: 10 }}
        />
      )}
    </Container>
  );
};

export { Input } ;
