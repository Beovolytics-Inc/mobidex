import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import ImportPrivateKeyScreen from './Locked/ImportPrivateKeyScreen';
import GenerateWalletScreen from './Locked/GenerateWalletScreen';
import UnlockScreen from './Locked/UnlockScreen';

import BlankHeader from './headers/Blank';
import NormalHeader from './headers/Normal';
import TradingHeader from './headers/Trading';
import TokenDetailsScreen from './Main/TokenDetailsScreen';
// import PortfolioScreen from './Main/PortfolioScreen';
import TradingScreen from './Main/TradingScreen';
import CreateOrderScreen from './Main/CreateOrderScreen';
import OrderDetailsScreen from './Main/OrderDetailsScreen';
import ReceiveScreen from './Main/ReceiveScreen';
import SendScreen from './Main/SendScreen';
import TransactionHistoryScreen from './Main/TransactionHistoryScreen';
import UnwrapEtherScreen from './Main/UnwrapEtherScreen';
import WrapEtherScreen from './Main/WrapEtherScreen';

import IntroScreen from './Onboarding/IntroScreen';

import GenerateWallet from './views/GenerateWallet';
import ImportPrivateKey from './views/ImportPrivateKey';
import TransactionsProcessing from './views/TransactionsProcessing';
import Err from './views/Error';

const LockedNavigation = SwitchNavigator(
  {
    Unlock: { screen: UnlockScreen },
    ImportPrivateKey: { screen: ImportPrivateKeyScreen },
    GenerateWallet: { screen: GenerateWalletScreen }
  },
  {
    initialRouteName: 'Unlock'
  }
);

const OnboardingNavigation = StackNavigator(
  {
    Intro: { screen: IntroScreen },
    NewWallet: { screen: GenerateWallet },
    Import: { screen: ImportPrivateKey }
  },
  {
    initialRouteName: 'Intro'
  }
);

const MainNavigation = StackNavigator(
  {
    List: { screen: TradingScreen },
    CreateOrder: { screen: CreateOrderScreen },
    OrderDetails: { screen: OrderDetailsScreen },
    History: { screen: TransactionHistoryScreen },
    // Portfolio: { screen: PortfolioScreen },
    Receive: { screen: ReceiveScreen },
    Send: { screen: SendScreen },
    Wrap: { screen: WrapEtherScreen },
    Unwrap: { screen: UnwrapEtherScreen }
  },
  {
    initialRouteName: 'List',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => {
      switch (navigation.state.routeName) {
        case 'List':
          return { header: <TradingHeader navigation={navigation} /> };
        default:
          return { header: <NormalHeader navigation={navigation} /> };
      }
    }
  }
);

export default SwitchNavigator(
  {
    Loading: { screen: TransactionsProcessing },
    Error: { screen: Err },
    Onboarding: { screen: OnboardingNavigation },
    Main: { screen: MainNavigation },
    Locked: { screen: LockedNavigation }
  },
  {
    initialRouteName: 'Loading'
  }
);
