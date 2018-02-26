import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import saga from 'sagas';
import injectSaga from 'utils/injectSaga';
import reducer from '../../services/reducer';
import { loadHoldings, fetchHoldings } from '../../services/actions';
import Portfolio from './view';
import { makeHoldingsSelector } from '../../services/selectors';


const mapStateToProps = createStructuredSelector({
  holdings: makeHoldingsSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  getHoldings: (holdings) => dispatch(loadHoldings(holdings)),
  fetchHoldings: () => dispatch(fetchHoldings()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Portfolio', reducer });

const withSaga = injectSaga({ key: 'Portfolio', saga });


export default compose(
  withReducer,
  withConnect,
  withSaga,
)(Portfolio);


// extra
// import { connect } from 'react-redux'

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)


// export default compose(
//   withReducer,
//   withConnect,
// )(Portfolio);
