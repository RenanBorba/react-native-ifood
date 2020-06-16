import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import
  {
    Container,
    Header,
    Title,
    RestaurantList,
    Item,
    ItemImage,
    ItemInfo,
    ItemTitle,
    ItemDescription,
    Star,
    Categories,
    Distance,
    Delay
  } from './styles';

// props
export default function Restaurants({ title, display }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      // Obter dados da rota 'restaurants' da api fake
      const response = await api.get('restaurants');

      setRestaurants(response.data);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
      <Header display={ display }>
        <Title>{ title }</Title>
      </Header>

      <RestaurantList>
        {/* Mapear restaurantes para cada item */}
        { restaurants.map(item => (
          <Item key={ item.id }>
            <ItemImage source={{ uri: item.restaurant_url }} />
            <ItemInfo>
              <ItemTitle>{ item.title }</ItemTitle>

              <ItemDescription>
                <MaterialIcons
                  name="star"
                  size={20}
                  color="#FF7C01" />
                <Star>{ item.star ? item.star : 'Novo!' } </Star>
                <Categories>{ item.categories } </Categories>
                <Distance>{ item.distance }</Distance>
              </ItemDescription>
              <Delay>{ item.delay }</Delay>
            </ItemInfo>
          </Item>
        ))}
      </RestaurantList>
    </Container>
  );
};