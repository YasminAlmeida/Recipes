import React, { useState, useEffect } from 'react';
import * as S from './styled.js';
import Cake from '../../Img/cake.png';
import Pizza from '../../Img/pizzamargherita.png';
import smoothie from '../../Img/smoothie.png';
import Spoon from '../../Img/grabowska.png';

export default function Recipes() {
  const [cake, setCake] = useState(false);
  const [pizza, setPizza] = useState(false);
  const [peanut, setPeanut] = useState(false);

  return (
    <section>
      <S.ContainerRecipe>
        <S.SubTitle>Latest Recipes</S.SubTitle>
        <S.ContainerImg>
          <S.OptionsRecipes>
            <div>
              <S.ImgRecipe src={Cake} alt="Red Velvet Cake" />
            </div>
            <S.TextOptions show={cake} onClick={() => setCake(!cake)}>
              <S.NameImg>Red Velvet Cake</S.NameImg>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
                tincidunt libero velit sit amet velit.
              </p>
            </S.TextOptions>
          </S.OptionsRecipes>
          <S.OptionsRecipes>
            <div>
              <S.ImgRecipe src={Pizza} alt="Margherita Pizza" />
            </div>
            <S.TextOptions show={pizza} onClick={() => setPizza(!pizza)}>
              <S.NameImg>Margherita Pizza</S.NameImg>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
                tincidunt libero velit sit amet velit.
              </p>
            </S.TextOptions>
          </S.OptionsRecipes>
          <S.OptionsRecipes>
            <div>
              <S.ImgRecipe src={smoothie} alt="Peanut Smoothie" />
            </div>
            <S.TextOptions show={peanut} onClick={() => setPeanut(!peanut)}>
              <S.NameImg>Peanut Smoothie</S.NameImg>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
                tincidunt libero velit sit amet velit.
              </p>
            </S.TextOptions>
          </S.OptionsRecipes>
        </S.ContainerImg>
        <S.FolderImg>
          <div>
            <S.ImgRecipe src={Spoon} alt="Red Velvet Cake" />
          </div>
          <S.TextFolder>
            <S.TitleFolder>About</S.TitleFolder>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur
              lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec
              mollis sagittis, enim risus euismod nisi, quis rutrum quam augue
              id mauris. Pellentesque mattis hendrerit semper. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien
              facilisis aliquam.
            </p>
          </S.TextFolder>
        </S.FolderImg>
      </S.ContainerRecipe>
      <S.ContainerSubscribe>
        <S.TitleSibmit>Subscribe</S.TitleSibmit>
        <S.SubtitleSubmit>Sign up for newsletter</S.SubtitleSubmit>
        <S.Submit>
          <S.Input type="email" name="email" placeholder=" Your Email" id="" />
          <S.Btn type="submit">SUBMIT</S.Btn>
        </S.Submit>
      </S.ContainerSubscribe>
    </section>
  );
}
