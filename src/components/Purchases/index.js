import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import
  {
    Container,
    Item,
    Date,
    Wrapper,
    Restaurant,
    RestaurantImage,
    Info,
    Name,
    OrderDetails,
    OrderNumber,
    Order,
    Evaluation,
    Message,
    Star,
    Menu,
    MenuButton,
    MenuText
  } from './styles';

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    async function loadPurchases() {
      // Obter dados da rota 'purchases' da api fake
      const response = await api.get('purchases');

      setPurchases(response.data);
    }
    loadPurchases();
  }, []);

  return (
    <Container>
      {/* Mapear compras para cada item */}
      { purchases.map(item => (
        <Item key={ item.id }>
          <Date>{ item.date }</Date>

          <Wrapper>
            <Restaurant>
              <RestaurantImage source={{ uri: item.restaurant_url }} />
              <Info>
                <Name>{ item.restaurant_name }</Name>
                <OrderNumber>Pedido entregue! { item.order_number }</OrderNumber>
              </Info>
            </Restaurant>
            <OrderDetails>
              <Order>{ item.order }</Order>
            </OrderDetails>
            <Evaluation>
              <Message>Avaliação do pedido</Message>
              <Star>
                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={20}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={20}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={20}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={20}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={20}
                />
              </Star>
            </Evaluation>
            <Menu>
              <MenuButton>
                <MenuText>AJUDA</MenuText>
              </MenuButton>
              <MenuButton>
                <MenuText>Detalhes</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
};