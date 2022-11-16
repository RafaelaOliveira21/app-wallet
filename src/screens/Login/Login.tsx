import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialGoogle } from '@components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '@components/ButtonSocialFacebook/ButtonSocialFacebook';
import { Input } from '@components/Input/Input';
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
            name="email"
            iconName="mail-outline"
            placeholder="Seu e-mail"
          />
        </ContentBody>

        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
