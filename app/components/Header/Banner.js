import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../images/banner.jpg';

const Img = styled.img`
  width: 12rem;
  margin: 0 auto;
  display: inline-block;
`;

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span>
        <Img src={BannerImage} alt="gdax" />
      </span>
    );
  }
}

export default Banner;
