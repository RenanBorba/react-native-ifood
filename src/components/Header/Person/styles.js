import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 0 10px
`;

export const ProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-around;
  width: 362px
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #CDC
`;

export const Info = styled.View`
`;

export const Name = styled.Text`
  color: #333;
  font-size: 22px
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #999
`;