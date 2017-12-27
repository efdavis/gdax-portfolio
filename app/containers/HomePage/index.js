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
import { Helmet } from 'react-helmet';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="GDAX Portfolio homepage" />
        </Helmet>
        <Header />
        <H1>
          GDAX Portfolio
        </H1>
        <H2>
          A way to figure out how much value you have across currencies
        </H2>
        <H3>
          ##  Auth instructions <br></br>
          1.  On the GDAX web page, select “API” from the menu.  Select “Create API Key’.  Select all of the permissions. <br></br>
          2.  Add three items to your Apple keychain in the “passwords” section. <br></br>
          Use the following names: <br></br>
          <br></br>
          * API_KEY <br></br>
          * API_PASS <br></br>
          * API_SECRET <br></br>
          <br></br>
          Copy the values from the GDAX web page. <br></br>
          3.  Run auth.py, follow the prompts when prompted <br></br>
        </H3>
      </div>
    );
  }
}
