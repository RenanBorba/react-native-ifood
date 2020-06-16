import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 10px;
  flex-direction: row
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px
`;

export const Title = styled.Text`
  color: ${props => props.disabled ? '#999' : `${'red'}`};
  font-size: 16px
`;