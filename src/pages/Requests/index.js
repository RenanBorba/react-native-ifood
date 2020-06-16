import React, { useState } from 'react';
import { View } from 'react-native';

import
  {
    Container,
    Wrapper,
    Warning,
    Suggestion,
    Image,
    Message
  } from './styles';

export default function Requests() {
  const [requests, setRequests] = useState(null);

  return (
    <Container>
      {/* Se existir requisições */}
      { requests ? (
        <View />
      /* Senão.. */
      ) : (
        <Wrapper>
          <Image />
          <Warning>Nenhum pedido em andamento!</Warning>
          <Message>
            <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
            <Suggestion>É só selecionar Início</Suggestion>
          </Message>
        </Wrapper>
      )}
    </Container>
  );
}

Requests.navigationOptions = {
  title: 'ANDAMENTO'
};