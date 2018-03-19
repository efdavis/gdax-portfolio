import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import saga from 'sagas';
import injectSaga from 'utils/injectSaga';
import reducer from '../../services/reducer';
import { fetchHoldings, fetchPrices } from '../../services/actions';
import Portfolio from './view';
import { makeHoldingsSelector, makePricesSelector } from '../../services/selectors';


const mapStateToProps = createStructuredSelector({
  holdings: makeHoldingsSelector(),
  prices: makePricesSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  getHoldings: (holdings) => dispatch(fetchHoldings(holdings)),
  getPrices: (prices) => dispatch(fetchPrices(prices)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Portfolio', reducer });

const withSaga = injectSaga({ key: 'Portfolio', saga });


export default compose(
  withReducer,
  withConnect,
  withSaga,
)(Portfolio);
