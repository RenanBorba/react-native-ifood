import React from 'react';
import { withNavigation } from 'react-navigation';
import { Container, Button, Title } from './styles';

// navigation prop
function MenuLeft({ navigation }) {
  return (
    <Container>
      {/* Navegar para 'Dashboard' */}
      <Button onPress={() => navigation.navigate('Dashboard')}>
        <Title>Entrega</Title>
      </Button>
      {/* Navegar para 'PreviousRequests' */}
      <Button onPress={() => navigation.navigate('PreviousRequests')}>
        <Title disabled>Retirada</Title>
      </Button>
    </Container>
  );
};

export default withNavigation(MenuLeft);