import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from '../../images/banner.jpg';

const Img = styled.img`
  width: 25rem;
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
          </HeaderLink>
          <HeaderLink to="/portfolio">
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
