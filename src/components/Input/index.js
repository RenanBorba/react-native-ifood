import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { colorRed } from '../../utils/colors';
import { Container, TextInput } from './styles';

//props
export default function Input({ placeholder, header }) {
  return (
    <Container header={ header }>
      <MaterialIcons
        name="search"
        size={25}
        color={ colorRed }
      />

      <TextInput placeholder={ placeholder } />
    </Container>
  );
};