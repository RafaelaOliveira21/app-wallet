import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialGoogle } from '@components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '@components/ButtonSocialFacebook/ButtonSocialFacebook';
import { Input } from '@components/Input/Input';
import { useTheme } from 'styled-components';
import { Button } from '@components/Button/Button';
import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter
} from './styles';

const Login: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem-Vindo(a) {'\n'} ao Wallet App</Title>
          <Description>Entrar com suas redes sociais</Description>
          <ViewButton>
            <ButtonSocialGoogle title="Google" />
            <ButtonSocialFacebook iconName="facebook" title="Facebook" />
          </ViewButton>
        </ContentHeader>
        <ContentBody>
          <Input
            leftIcon
            iconSize={24}
            iconName="mail-outline"
            iconColor={COLORS.GRAY1}
            placeholder="Digite seu e-mail"
          />
          <Input
            leftIcon
            iconSize={24}
            iconName="lock-closed-outline"
            placeholder="Digite sua senha"
          />
          <Button title="Entrar" onPress={() => {}} />
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
