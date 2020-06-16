import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import
  {
    Container,
    Header,
    Title,
    CategoriesList,
    Item,
    ItemImage,
    ItemTitle
  } from './styles';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      // Obter dados da rota 'categories' da api fake
      const response = await api.get('categories');
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        {/* Mapear categorias para cada item */}
        { categories.map(item => (
          <Item key={ item.id }>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{ item.title }</ItemTitle>
          </Item>
        ))}
      </CategoriesList>
    </Container>
  );
};