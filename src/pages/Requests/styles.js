import styled from 'styled-components/native';
import noitens from '../../assets/noitens.png';

export const Container = styled.View`
  background: #FFF;
  flex: 1;
  align-items: center;
  justify-content: center
`;

export const Image = styled.Image.attrs({
  source: no-itens
})`
  width: 250px;
  height: 250px
`;

export const Casing = styled.View``;

export const Message = styled.View`
  align-items: center
`;

export const Warning = styled.Text`
  margin-top: 25px;
  font-size: 18px;
  color: #333
`;

export const Suggestion = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  color: #999
`;