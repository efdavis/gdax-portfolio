import { createSelector } from 'reselect';

const holdingsSelector = (state) => state.getIn(['Portfolio', 'holdings', 'data']);
const pricesSelector = (state) => state.getIn(['Portfolio', 'holdings', 'prices']);

const formatHoldings = (data) => {
  const wallet = [];

  if (data) {
    data.map((balance) => {
      wallet.push(balance.available);
      return wallet;
    });
  }
  return wallet;
};


const makeHoldingsSelector = () => createSelector(
  holdingsSelector,
  (holdings) =>
    formatHoldings(holdings) || {}

);

const makePricesSelector = () => createSelector(
  pricesSelector,
  (prices) =>
    prices || {}

);

export {
makeHoldingsSelector,
  makePricesSelector,
};
