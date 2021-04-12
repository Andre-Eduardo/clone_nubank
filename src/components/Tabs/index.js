import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

const Tabs = ({ translate }) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translate.interpolate({
              inputRange: [0, 280],
              outputRange: [0, 30],
              extrapolate: 'clamp'
            })
          }
        ],
        opacity: translate.interpolate({
          inputRange: [0, 180],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name='person-add' size={20} color='#FFF' />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name='chat-bubble-outline' size={20} color='#FFF' />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-downward' size={20} color='#FFF' />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-upward' size={20} color='#FFF' />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name='lock' size={20} color='#FFF' />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
