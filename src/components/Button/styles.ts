import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Pressable`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(25)}px;
  border-radius: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.PINK6};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: rgba(0, 0, 0, 0.2) 1px 3px 3px;
`;
