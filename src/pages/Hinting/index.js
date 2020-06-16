import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

import
  {
    Container,
    BackButton,
    ExportButton
  } from './styles';

export default function Hinting() {
  return (
    <Container>
      <Categories />
      <Restaurants />
    </Container>
  );
}

// Hinting Header
// navigation prop
Hinting.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    // Voltar
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35} />
    </BackButton>
  ),
  // Obter param. categorie da 'promo'
  title: `${navigation.getParam('promo').categorie}`,
  headerRight: () => (
    <ExportButton>
      <MaterialCommunityIcons
        name="export-variant"
        color="#F01"
        size={24} />
    </ExportButton>
  )
});