import React from 'react';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Header from 'components/Header';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import wallet from 'mockWallet.json';
import currentPrice from 'currentPrices.json';
import userData from 'userData.json';

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 100vh;
  padding-left: 40px;
  padding-right: 40px;
`;

const TableColumn = styled.div `
  padding: 20px;
  text-align: center;
  font-size: 14px;
`;

const ColorThemer = styled.span`
   color: ${(props) => (props.posOrNeg > 0) ? 'green' : 'red'};
`;

// Fetches Holdings
// TODO refactor into sagas
// const getHoldings = () => {
//   const url = 'http://localhost:3000/api/auth';
//   // fetch(url).then((data) => console.log(data));
//   return fetch(url).then((response) => response.json())
//   .then((data) => data);
// };

// console.log(getHoldings());


// axios.get('/api/auth')
//   .then(({ data }) => {
//     console.log(data, 'Data ');
//     this.setState({
//       wallet: [data],
//     });
//   })
//   .catch((err) => {
//     console.log(err, 'Data not retrieved');
//   });

// how to async call the data

// console.log(wallet, 'wallet');

export default class Portfolio extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: [],
      wallet: [],
      holdings: [],
    };
  }

  componentDidMount() {
    console.log('in here');
    this.props.fetchHoldings();
  }

  loadHoldings = () => {
    const loadedHoldings = this.props.getHoldings();
    this.setState = {
      holdings: loadedHoldings,
    };
  }

  render() {
    const { getHoldings } = this.props;
    console.log(' this.props: ', this.props);

    // const wallet = this.state.wallet;
    const holdings1 = this.state.holdings;
    console.log(holdings1);

    // API order?
    // const walletBTC = wallet[0].available;
    // const walletFiat = wallet[1].available;
    // const walletLTC = wallet[2].available;
    // const walletETH = wallet[3].available;
    // const walletBCH = wallet[4].available;

    // Mock order
    const walletLTC = wallet[0].available;
    const walletETH = wallet[1].available;
    const walletBTC = wallet[2].available;
    const walletFiat = wallet[3].available;
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
    const totalGainLoss = (totalHoldings - userData[0].money_in).toFixed(2);
    const percentGainLoss = ((1 - (totalHoldings / userData[0].money_in)) * -100).toFixed(1);

    return (
      <div>
        <button onClick={getHoldings}>Holdings</button>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="GDAX Portfolio homepage" />
        </Helmet>
        <Header />

        <H1>
            Portfolio
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
          Total Gain/Loss <ColorThemer posOrNeg={totalGainLoss}>${totalGainLoss}</ColorThemer> <br></br>
          Percent Gain/Loss <ColorThemer posOrNeg={percentGainLoss}>{percentGainLoss}%</ColorThemer> <br></br>
          </TableColumn>
        </TableWrapper>
      </div>

    );
  }
}

Portfolio.propTypes = {
  holdings: PropTypes.object,
  getHoldings: PropTypes.func,
  fetchHoldings: PropTypes.func,
};
