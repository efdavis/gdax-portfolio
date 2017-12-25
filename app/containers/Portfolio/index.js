/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Header from 'components/Header';
// import H2 from 'components/H2';
import { Helmet } from 'react-helmet';
import wallet from 'mockWallet.json';
import currentPrice from 'currentPrices.json';

export default class Portfolio extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="GDAX Portfolio homepage" />
        </Helmet>
        <Header />
        <H1>
            Portfolio info
        </H1>
        <H3>
          <H2>Current Holdings</H2> <br></br>
          LTC {wallet[0].available} <br></br>
          ETH {wallet[1].available} <br></br>
          BTC {wallet[2].available} <br></br>
          Fiat {wallet[3].available} <br></br>
          BCH {wallet[4].available} <br></br>
          <br></br>
          <H2>Current Prices</H2> <br></br>
          LTC ${currentPrice[0].available} <br></br>
          ETH ${currentPrice[1].available} <br></br>
          BTC ${currentPrice[2].available} <br></br>
          Fiat ${currentPrice[3].available} <br></br>
          BCH ${currentPrice[4].available} <br></br>
          <br></br>
          <H2>Amount in USD</H2> <br></br>
          LTC {currentPrice[0].available * wallet[0].available} <br></br>
          ETH {currentPrice[1].available * wallet[1].available} <br></br>
          BTC {currentPrice[2].available * wallet[2].available} <br></br>
          Fiat {currentPrice[3].available * wallet[3].available} <br></br>
          BCH {currentPrice[4].available} <br></br>
        </H3>
      </div>
    );
  }
}
