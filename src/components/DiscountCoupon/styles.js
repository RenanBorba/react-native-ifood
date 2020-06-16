import styled from 'styled-components/native';
import coupon from '../../assets/coupon.png';

export const CouponButton = styled.TouchableOpacity`
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: 5px 15px;
  margin: 0 20px
`;

export const Divisor = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center
`;

{/* atributos */}
export const Logo = styled.Image.attrs({
  source: discount-coupon
})`
  width: 50px;
  height: 50px
`;

export const CouponInfo = styled.View`
  margin-left: 10px
`;

export const Title = styled.Text`
  font-weight: bold
`;

export const Validity = styled.Text`
  margin-top: 5px;
  color: #999
`;
