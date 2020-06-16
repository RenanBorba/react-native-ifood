import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { formatNumber } from '../../utils/formatNumber';
import
  {
    Container,
    Header,
    Info,
    Title,
    SubTitle,
    SeeMoreButton,
    SeeMoreText,
    OfferList,
    ItemInfo,
    Item,
    ItemImage,
    ItemTitle,
    ItemPrice,
    OldPrice,
    Price
  } from './styles';

// navigation prop
function Offers({ navigation }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      // Obter dados da rota 'offers' da api fake
      const response = await api.get('offers');

      // Mapear e associar dados das ofertas da api fake
      const data = response.data.map(offer => ({
        id: offer.id,
        offer_url: offer.offer_url,
        title: offer.title,
        newPrice: formatNumber(offer.newPrice),
        price: formatNumber(offer.price),
        ingredients: offer.ingredients,
        delivery: offer.delivery,
        delay: offer.delay,
        icon: offer.icon
      }));

      setOffers(data);
    }
    loadOffers();
  }, []);

  function handleNavigateItem(item) {
    // Navegar para Item
    navigation.navigate('Item', { item });
  }

  return (
    <Container>
      <Header>
        <Info>
          <Title>Comida boa e barata!</Title>
          <SubTitle>Pratos com frete grátis.</SubTitle>
        </Info>

        <SeeMoreButton onPress={() => navigation.navigate('Search')}>
          <SeeMoreText>Ver mais</SeeMoreText>
        </SeeMoreButton>
      </Header>

      <OfferList horizontal>
        {/* Mapear ofertas para cada item */}
        { offers.map(offer => (
          <Item key={ offer.id } onPress={() => handleNavigateItem(offer)}>
            <ItemImage source={{ uri: offer.offer_url }} />
            <ItemInfo>
              <ItemTitle>{ offer.title }</ItemTitle>
              <ItemPrice>
                <Price>{ offer.newPrice }</Price>
                <OldPrice>{ offer.price }</OldPrice>

                <MaterialIcons
                  name="local-offer"
                  size={15}
                  color="#000"
                />
              </ItemPrice>
            </ItemInfo>
          </Item>
        ))}
      </OfferList>
    </Container>
  );
};

export default withNavigation(Offers);
