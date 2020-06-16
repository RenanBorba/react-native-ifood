import React from 'react';
import Purchases from '../../components/Purchases';

import { Container } from './styles';

export default function PreviousRequests() {
  return (
    <Container>
      <Purchases />
    </Container>
  );
}

PreviousRequests.navigationOptions = {
  title: 'ANTERIORES'
};