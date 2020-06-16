import styled from 'styled-components/native';

export const PromoList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false
})`
  margin: 20px 0;
  padding-left: 5px
`;

export const Item = styled.TouchableOpacity`
  margin-left: 15px
`;

export const PromoImage = styled.Image`
  width: 300px;
  height: 150px
`;
