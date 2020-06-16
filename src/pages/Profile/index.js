import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Person from '../../components/Header/Person';

import
  {
    Container,
    OptionsList,
    Option,
    Info,
    Title,
    Description,
    Wrapper,
    AdditionalMenu,
    AdditionalOption,
    OptionName
  } from './styles';

// navigation prop
export default function Profile({ navigation }) {
  return (
    <Container>
      <OptionsList>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Notificações</Title>
            <Description>Minha central de notificações</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        {/* Navegar para Wallet' */}
        <Option onPress={() => navigation.navigate('Wallet')}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Carteira</Title>
            <Description>Meu saldo e QR Code</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Cupons</Title>
            <Description>Meus cupons de desconto</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Favoritos</Title>
            <Description>Meus locais favoritos</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="credit-card"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Formas de pagamento</Title>
            <Description>Minhas formas de pagamento</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="map-marker"
            size={35}
            color="#333"
          />
          <Info>
            <Title>Endereços</Title>
            <Description>Meus endereços de entrega</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>
      </OptionsList>

      <AdditionalMenu>
        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons
              name="lifebuoy"
              size={35}
              color="#CDC"
            />
            <OptionName>Ajuda</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>

        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons
              name="settings-outline"
              size={35}
              color="#CDC"
            />
            <OptionName>Configurações</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>

        <AdditionalOption>
          <Wrapper>
            <MaterialIcons
              name="security"
              size={35}
              color="#CDC"
            />
            <OptionName>Segurança</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>

        <AdditionalOption>
          <Wrapper>
            <MaterialIcons
              name="store-mall-directory"
              size={35}
              color="#CDC"
            />
            <OptionName>Sugerir Restaurantes</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>

        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons
              name="rocket"
              size={35}
              color="#CDC"
            />
            <OptionName>Seja parceiro!</OptionName>
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>
      </AdditionalMenu>
    </Container>
  );
}

Profile.navigationOptions = {
  headerTitleStyle: {
    display: 'none'
  },
  headerStyle: {
    height: 130
  },
  headerLeft: () => <Person />
};