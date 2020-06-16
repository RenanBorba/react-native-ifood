import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px 15px 20px
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-size: 23.25px;
  font-weight: bold
`;

export const SubTitle = styled.Text`
  color: #999
`;

export const SeeMoreButton = styled.TouchableOpacity``;

export const SeeMoreText = styled.Text`
  color: red
`;

export const OfferList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false
})`
  padding-left: 20px
`;

export const Item = styled.TouchableOpacity`
  width: 200px;
  margin-right: 15px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 4px
`;

export const ItemInfo = styled.View`
  margin-top: auto;
  padding: 10px
`;

export const ItemImage = styled.Image`
  height: 120px;
  width: 200px;
  background: #000
`;

export const ItemTitle = styled.Text.attrs({
  numberOfLines: 2
})`
  font-weight: bold
`;

export const ItemPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px
`;

export const OldPrice = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  color: #999;
  font-size: 16px;
  text-decoration: line-through
`;

export const Price = styled.Text`
  color: green;
  font-weight: bold;
  font-size: 18px
`;