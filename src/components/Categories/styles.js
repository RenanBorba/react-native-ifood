import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px 0px
`;

export const Header = styled.View`
  margin-left: 20px
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold
`;

export const CategoriesList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false
})`
  margin-top: 10px;
  padding-left: 20px
`;

export const Item = styled.TouchableOpacity`
  margin-right: 15px;
  align-items: center
`;

export const ItemImage = styled.Image`
  width: 200px;
  height: 120px;
  border-radius: 10px
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #999
`;
