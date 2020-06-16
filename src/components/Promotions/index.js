import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';
import { PromoList, Item, PromoImage } from './styles';

// navigation prop
function Promotions({ navigation }) {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function loadPromotions() {
      // Obter dados da rota 'promotions' da api fake
      const response = await api.get('promotions');
      setPromotions(response.data);
    }
    loadPromotions();
  }, []);

  function handleNavigate(promo) {
    // Navegar para 'Trending' da promo
    navigation.navigate('Trending', { promo });
  }

  return (
    <PromoList horizontal>
      {/* Mapear promoções para cada item */}
      { promotions.map(promo => (
        <Item key={ promo.id } onPress={() => handleNavigate(promo)}>
          <PromoImage source={{ uri: promo.promo_url }} />
        </Item>
      ))}
    </PromoList>
  );
};

export default withNavigation(Promotions);