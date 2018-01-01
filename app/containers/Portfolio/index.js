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
import Header from 'components/Header';
import styled from 'styled-components';
// import H2 from 'components/H2';

import { Helmet } from 'react-helmet';
import wallet from 'mockWallet.json';
import currentPrice from 'currentPrices.json';
import userData from 'userData.json';

const TableWrapper = styled.div`
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 100vh;
`;

const TableColumn = styled.div `
  padding: 20px;
  text-align: center;
`;

export default class Portfolio extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const walletLTC = wallet[0].available;
    const walletETH = wallet[1].available;
    const walletBTC = wallet[2].available;
    const walletFiat = wallet[3].available.toFixed(2);
    const walletBCH = wallet[4].available;

    const priceLTC = currentPrice[0].available;
    const priceETH = currentPrice[1].available;
    const priceBTC = currentPrice[2].available;
    const priceBCH = currentPrice[4].available;

    const usdLTC = Number((walletLTC * priceLTC).toFixed(2));
    const usdETH = Number((walletETH * priceETH).toFixed(2));
    const usdBTC = Number((walletBTC * priceBTC).toFixed(2));
    const usdBCH = Number((walletBCH * priceBCH).toFixed(2));

    const totalHoldings = usdLTC + usdETH + usdBTC + usdBCH;


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
        <TableWrapper>

          <TableColumn>
            <H2>Current Holdings</H2>
          LTC {walletLTC} <br></br>
          ETH {walletETH} <br></br>
          BTC {walletBTC} <br></br>
          Fiat ${walletFiat} <br></br>
          BCH {walletBCH} <br></br>
          </TableColumn>

          <TableColumn>
            <H2>Current Prices</H2>
          LTC ${priceLTC} <br></br>
          ETH ${priceETH} <br></br>
          BTC ${priceBTC} <br></br>
          BCH ${priceBCH} <br></br>
          </TableColumn>
          <TableColumn>
            <H2>Amount in USD</H2>
          LTC ${usdLTC} <br></br>
          ETH ${usdETH} <br></br>
          BTC ${usdBTC} <br></br>
          BCH ${usdBCH} <br></br>
          </TableColumn>
          <TableColumn>
            <H2>Analytics</H2>
          Initial Investment ${userData[0].money_in} <br></br>
          Total Holdings ${totalHoldings} <br></br>
          Total Gain/Loss ${(totalHoldings - userData[0].money_in).toFixed(2)} <br></br>
          Percent Gain/Loss {((1 - (totalHoldings / userData[0].money_in)) * -100).toFixed(1)}% <br></br>
          </TableColumn>
        </TableWrapper>
      </div>

    );
  }
}
