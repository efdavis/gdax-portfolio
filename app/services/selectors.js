import { createSelector } from 'reselect';

const holdingsSelector = (state) => state.getIn(['holdings']);

const makeHoldingsSelector = () => createSelector(
  holdingsSelector,
  (holdings) =>
    holdings || {}

);

export {
makeHoldingsSelector,
};
