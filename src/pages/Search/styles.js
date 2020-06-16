import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
  padding: 0 15px
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #333;
  margin: 15px;
  font-weight: bold
`;

export const CategoriesList = styled.FlatList.attrs({
  numColumns: 2,
  horizontal: false,
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  margin: 0px 10px
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  margin: 10px
  5px
`;

export const ItemImage = styled.Image`
  width: 170px;
  height: 80px;
  border-radius: 2px
`;

export const ItemTitle = styled.Text`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px
`;