import React from 'react';
import * as S from './styled.js';
import Insta from '../../Img/Instagram.svg';
import Twitter from '../../Img/Twitter.svg';
import Facebook from '../../Img/Facebook.svg';
import Pinterest from '../../Img/Pinterest.svg';


export default function Footer() {
  return (
    <S.ContainFooter>
      <S.BoxIcons>
        <a href='https://www.instagram.com/'><S.Icon src={Insta} alt="Instagram" /></a>
        <a href='https://twitter.com/'><S.Icon src={Twitter} alt="Twitter" /></a>
        <a href='https://www.facebook.com/'><S.Icon src={Facebook} alt="Facebook" /></a>
        <a href='https://br.pinterest.com/'><S.Icon src={Pinterest} alt="Pinterest" /></a>
      </S.BoxIcons>
      <S.BoxList>
        <S.List>
          <li>About</li>
          <li>Recipes</li>
          <li>Subscribe</li>
        </S.List>
      </S.BoxList>
    </S.ContainFooter>
  );
}
