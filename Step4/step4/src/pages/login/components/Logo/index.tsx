import React from 'react';
import logo from '@assets/logo.png';
import * as Styled from './styled';

const Logo = () => {
  return (
    <Styled.CardMedia>
      <Styled.Image src={logo} />
    </Styled.CardMedia>
  );
};

export default Logo;
