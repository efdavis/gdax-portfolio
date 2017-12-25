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
import Header from 'components/Header';
// import H2 from 'components/H2';
import { Helmet } from 'react-helmet';
import data from 'mockData.json';


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
        {console.log(data)};
      </div>
    );
  }
}
