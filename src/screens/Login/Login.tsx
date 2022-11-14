import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonSocialGoogle } from '@components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '@components/ButtonSocialFacebook/ButtonSocialFacebook';
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

        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
