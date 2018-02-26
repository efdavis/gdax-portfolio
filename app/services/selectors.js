import { createSelector } from 'reselect';

const holdingsSelector = (state) => state.getIn(['Portfolio', 'holdings', 'data']);

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

export {
makeHoldingsSelector,
};
