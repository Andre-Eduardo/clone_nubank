import React from 'react';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translate }) {
  return (
    <Container
      style={{
        opacity: translate.interpolate({
          inputRange: [0, 250],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value='Just some string value'
          color='#8b10ae'
          size={80}
          backgroundColor='#fff'
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff' />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#fff' />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='credit-card' size={20} color='#fff' />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#fff' />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
