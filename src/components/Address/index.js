import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { colorRed } from '../../utils/colors';
import
  {
    Container,
    Location,
    AddressMenu
  } from './styles';

export default function Address() {
  return (
    <Container>
      <AddressMenu>
        <Location>Próximo de Res. Franciscano...</Location>

        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={ colorRed } />
      </AddressMenu>
    </Container>
  );
};
