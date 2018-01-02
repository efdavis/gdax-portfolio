import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from '../../images/banner.jpg';

const Img = styled.img`
  width: 18rem;
  margin: 0 auto;
  display: block;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="gdax" />
        <NavBar>
          <HeaderLink to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/portfolio">
            Portfolio
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
