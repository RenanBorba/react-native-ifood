import styled from 'styled-components/native';

export const Container = styled.View``;

export const Item = styled.View`
  margin-top: 20px
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold
`;

export const Casing = styled.View`
  background: #FFF;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.1)
`;

export const Restaurant = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  overflow: hidden
`;

export const RestaurantImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px
`;

export const Info = styled.View`
  margin-left: 15px
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1
})`
  color: #333;
  font-weight: bold;
  font-size: 16px
`;

export const OrderDetails = styled.View`
  padding: 5px;
  margin: 2px 0
`;

export const OrderNumber = styled.Text`
  font-size: 14px;
  color: #999
`;

export const Order = styled.Text`
  font-size: 16px;
  color: #999
`;

export const Evaluation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 ;
  border-bottom-width: 1.1px;
  border-color: #CDC
`;

export const Message = styled.Text`
  font-size: 16px;
  color: #999
`;

export const Star = styled.Text``;

export const Menu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0
`;

export const MenuButton = styled.TouchableOpacity`
  padding: 5px
`;

export const MenuText = styled.Text`
  color: red
`;