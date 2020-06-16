import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import
  {
    Container,
    BackButton,
    Finances,
    Title,
    Value,
    QrCode,
    Options,
    Option,
    Message,
    Panel,
    Money
  } from './styles';

export default function Wallet() {
  return (
    <Container>
      <Panel>
        <Finances>
          <Title>Seu saldo na carteira</Title>
          <Money>
            <Value>R$ 46,50</Value>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="#F01"
            />
          </Money>
        </Finances>

        <QrCode>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#F01"
            size={28}
          />
          <Title>QR Code</Title>
        </QrCode>
      </Panel>

      <Options horizontal>
        <Option onPress={() => {}}>
          <MaterialIcons
            name="credit-card"
            size={35}
            color="#999"
          />
          <Message>Formas de pagamento</Message>
        </Option>

        <Option onPress={() => {}}>
          <MaterialIcons
            name="card-giftcard"
            size={35}
            color="#999"
          />
          <Message>Resgatar IFood Card</Message>
        </Option>

        <Option onPress={() => {}}>
          <MaterialIcons
            name="store"
            size={35}
            color="#999"
          />
          <Message>Por onde usar</Message>
        </Option>

        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="help-circle"
            size={35}
            color="#999"
          />
          <Message>Preciso de Ajuda</Message>
        </Option>
      </Options>
    </Container>
  );
}

// navigation prop
Wallet.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'CARTEIRA',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },

  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35}
      />
    </BackButton>
  )
});