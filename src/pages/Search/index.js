import React, { useState, useEffect } from 'react';

import Input from '../../components/Input';
import api from '../../services/api';
import
  {
    Container,
    CategoriesList,
    Title,
    Item,
    ItemImage,
    ItemTitle
  } from './styles';

export default function Search() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function showCategories() {
      // Obter dados da rota 'categories' da api fake
      const response = await api.get('categories');
      setCategories(response.data);
    }
    showCategories();
  }, []);

  return (
    <Container>
      <Input header placeholder="Busque por item ou loja" />

      <Title>Categorias</Title>
      <CategoriesList
        data={ categories }
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Item>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{ item.title }</ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
};

Search.navigationOptions = {
  headerShown: false
};