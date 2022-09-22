import styled from 'styled-components';

export const ContainerRecipe = styled.section`
  background: #f2f4f1;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SubTitle = styled.h4`
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  font-size: 1.6rem;
  letter-spacing: 1.72px;
  color: #373737;
  text-transform: uppercase;
  opacity: 1;
  &:after {
    content: '';
    margin-top: 5px;
    display: block;
    margin-left: 90px;
    width: 30px;
    height: 4px;
    background: #373737;
  }
`;
export const ContainerImg = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
export const OptionsRecipes = styled.div`
  background: #fff;
  margin: 10px;
  -webkit-box-shadow: 11px 21px 12px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 11px 21px 12px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 11px 21px 12px 1px rgba(0, 0, 0, 0.24);
  @media (max-width: 750px) {
    max-width: 400px;
  }
`;
export const NameImg = styled.h4`
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  letter-spacing: 1.72px;
  text-transform: uppercase;
  color: #373737;

  opacity: 1;
  &:before {
    content: '';
    margin-bottom: 8px;
    display: block;
    margin-left: 70px;
    width: 20px;
    height: 3px;
    background: #373737;
  }
`;
export const TextOptions = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 20px 40px 30px 40px;
  align-items: center;
`;
export const FolderImg = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff;
  overflow: hidden;
  margin-top: 150px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
export const TitleFolder = styled.h4`
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  letter-spacing: 1.72px;
  text-transform: uppercase;
  color: #373737;

  opacity: 1;
  &:after {
    content: '';
    margin-top: 5px;
    display: block;
    margin-left: 20px;
    width: 20px;
    height: 3px;
    background: #373737;
  }
`;
export const TextFolder = styled.div`
  padding: 40px 40px 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #373737;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const ImgRecipe = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px;
`;
export const ContainerSubscribe = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background: #dfe4de;
  justify-items: center;
  padding-bottom: 50px;
`;
export const TitleSibmit = styled.h4`
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  letter-spacing: 1.72px;
  text-transform: uppercase;
  color: #373737;
  margin-bottom: 0;
`;
export const SubtitleSubmit = styled.p`
  font: normal normal 600 40px/50px Hurme Geometric Sans 1;
  font-size: 0.8rem;
  letter-spacing: 1.72px;
  color: #373737;
  margin-bottom: 20px;
`;
export const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 350px;
  height: 45px;
  border: none;
  background: #eff1ee;
  margin-bottom: 10px;
  @media (max-width: 400px) {
    width: 230px;
  }
`;
export const Btn = styled.button`
  background: transparent;
  width: 100px;
  height: 35px;
  text-align: center;
  border: solid 3px #373737;
  cursor: pointer;
`;
