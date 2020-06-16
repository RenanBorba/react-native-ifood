import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0 20px 20px
`;

export const Header = styled.View`
  display: ${props => props.display ? 'flex' : 'none'}
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold
`;

export const RestaurantList = styled.ScrollView`
  margin-top: 10px
`;

export const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 5px;
  margin-right: 15px
`;

export const ItemImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px
`;

export const ItemInfo = styled.View`
  margin-left: 15px
`;

export const ItemTitle = styled.Text`
  font-weight: bold;
  color: #333
`;

export const ItemDescription = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  align-items: center
`;

export const Star = styled.Text`
  font-size: 14px;
  color: #FF7C01
`;

export const Categories = styled.Text`
  font-size: 14px;
  color: #999
`;

export const Distance = styled.Text`
  font-size: 14px;
  color: #999
`;

export const Delay = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: #999
`;