import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import
  {
    Container,
    ItemImage,
    ItemTitle,
    ItemIngredient,
    ItemPrice,
    OldPrice,
    Info,
    Details,
    Delivery,
    DeliveryTitle,
    DeliveryDelay,
    Wrapper,
    BackButton,
    LeftHeader,
    DrinkHeader,
    Message,
    SubMessage,
    DrinkItem,
    DrinkTitle,
    DrinkPrice,
    Warning,
    WarningText
  } from './styles';

// navigation prop
export default function Item({ navigation }) {
  // Obter param. 'item'
  const item = navigation.getParam('item');

  return (
    <Container>
      <Details>
        <ItemImage source={{ uri: item.offer_url }} />
        <ItemTitle>{ item.title }</ItemTitle>
        <ItemIngredient>{ item.ingredients }</ItemIngredient>
        <Info>
          <ItemPrice>{ item.newPrice }</ItemPrice>
          <OldPrice>{ item.price }</OldPrice>
        </Info>

        <Delivery>
          <Wrapper>
            <MaterialIcons
              name={ item.icon }
              size={22}
              color="#F01"
            />
            <DeliveryTitle>{ item.delivery }</DeliveryTitle>
          </Wrapper>
          <DeliveryDelay>{ item.delay }</DeliveryDelay>
        </Delivery>
      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Escolha sua bebida</Message>
          <SubMessage>Escolha 1 opção</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>OPCIONAL</WarningText>
        </Warning>
      </DrinkHeader>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Coca-cola 600ml</DrinkTitle>
          <DrinkPrice>+ R$ 6,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons
          name="add"
          size={22}
          color="#000"
        />
      </DrinkItem>

      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fatto Bene uva 600ml</DrinkTitle>
          <DrinkPrice>+ R$ 8,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons
          name="add"
          size={22}
          color="#000"
        />
      </DrinkItem>

      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fanta uva 300ml</DrinkTitle>
          <DrinkPrice>+ R$ 4,50</DrinkPrice>
        </LeftHeader>
        <MaterialIcons
          name="add"
          size={22}
          color="#000"
        />
      </DrinkItem>

      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Poty Guaraná 300ml</DrinkTitle>
          <DrinkPrice>+ R$ 4,50</DrinkPrice>
        </LeftHeader>
        <MaterialIcons
          name="add"
          size={22}
          color="#000"
        />
      </DrinkItem>
    </Container>
  );
}

// navigation prop
Item.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'DETALHES DO ITEM',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  headerLeft: () => (
    // Voltar
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35} />
    </BackButton>
  ),
});