import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './Banner';

const ButtonContainer = styled.span`
  justify-content: right;
  flex: 1;
`;


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <Banner />
          <ButtonContainer>
            <HeaderLink to="/">
              Home
            </HeaderLink>
            <HeaderLink to="/portfolio">
              Portfolio
            </HeaderLink>
          </ButtonContainer>
        </NavBar>
      </div>
    );
  }
}

export default Header;
