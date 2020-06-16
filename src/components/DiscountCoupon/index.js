import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import { colorRed } from '../../utils/colors';
import
  {
    CouponButton,
    Divisor,
    Logo,
    Content,
    CouponInfo,
    Title,
    Validity
  } from './styles';

function DiscountCoupon() {
  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Cupom de R$10</Title>
            <Validity>Válido até as 17:30</Validity>
          </CouponInfo>
        </Content>

        <MaterialIcons
          name="keyboard-arrow-right"
          color={ colorRed }
          size={20}
        />
      </Divisor>
    </CouponButton>
  );
};

export default withNavigation(DiscountCoupon);