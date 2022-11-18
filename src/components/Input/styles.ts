import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  justify-content: center;
  margin-top: 15px;
  border-radius: 17px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
  width: 100%;
  height: 45%;
  border-radius: 8px;
  border: 0px;
  flex: 1;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
