import React, { useState } from 'react';
import * as S from './styled.js';
import RC from '../../Img/RC2.png';

export default function Header() {
  const [menu, setMenu] = useState(false)

  console.log(menu)
  return (
    <S.ContainerHeader>
      <S.BoxNav>
        <S.Logo src={RC} alt='Logo' />
        <S.Menu onClick={() => { setMenu(!menu) }}>
          <div></div>
          <div></div>
        </S.Menu>
        <S.List show={menu}>
          <S.Li>About</S.Li>
          <S.Li>Recipes</S.Li>
          <S.Li>Subscribe</S.Li>
        </S.List>
        
      </S.BoxNav>
      <S.Title>Recipes</S.Title>
    </S.ContainerHeader>
  );
}
